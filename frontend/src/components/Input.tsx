import { useState, useRef, useEffect } from "react";
import { Send } from "../icons/Send";

export const Input = () => {
    const [value, setValue] = useState("");
    const [text, setText] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Auto resize the textarea
    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto"; // Reset height
            textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`; // Limit to 200px
        }
    }, [value]);

    const handleSend = (e: React.MouseEvent) => {
        e.preventDefault();
        if (value.trim()) {
            console.log("Send:", value);
            setValue(""); // Clear input
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.ctrlKey) {
          e.preventDefault(); // prevent newline
          if (value.trim()) {
            setText(value);
            setValue("");
          }
        }
      };

    return (
        <div className="flex items-end justify-center p-2 bg-neutral-700/50 rounded-lg mt-4">
            <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyUpCapture={handleKeyDown}
                placeholder="Ask anything"
                rows={1}
                className="w-full resize-none max-h-[200px] overflow-y-auto text-white border border-neutral-600 bg-transparent rounded-md p-3 focus:outline-none focus:border-neutral-500 transition-colors duration-200"
            />
            <div
                className="text-white m-2 cursor-pointer hover:scale-105 transition-all duration-200"
                onClick={handleSend}

            >
                <Send />
            </div>
        </div>
    );
};
