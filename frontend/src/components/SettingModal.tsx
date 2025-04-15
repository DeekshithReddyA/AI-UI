import { useState } from "react";
import { X } from "../icons/X";

interface SettingsModalProps {
    setSettingModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SettingsModal = (props: SettingsModalProps) => {
    const [formData, setFormData] = useState<{chatgpt: string, claude: string}>({
        chatgpt: "",
        claude: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <>
        <div className="p-4 m-10 bg-black rounded-md shadow-lg">
            <div className="flex flex-col items-end justify-center">
                <div className="text-white cursor-pointer" onClick={(e) => {
                e.preventDefault();
                props.setSettingModal(false);
            }}>
                <X />
            </div>
        </div>
            <div className="flex justify-center text-white mb-4">API Validation</div>
            <div className="flex flex-col space-y-2">
                <div className="text-white">
                    ChatGPT
                </div>
                <input type="text" className="text-white border rounded-md p-1" name="chatgpt" value={formData.chatgpt} onChange={handleChange} placeholder="Enter your API key" />
                <button className="text-black bg-white rounded-lg w-1/2 cursor-pointer" onClick={(e) => {
                    e.preventDefault();
                    console.log("Validate Key");
                }}>Validate Key</button>
                <div className="text-white mt-4">
                    Claude
                </div>
                <input type="text" className="text-white border rounded-md p-1" name="claude" value={formData.claude} onChange={handleChange} placeholder="Enter your API key" />
                <button className="text-black bg-white rounded-lg w-1/2 cursor-pointer" onClick={(e) => {
                    e.preventDefault();
                    console.log("Validate Key");
                }}>Validate Key</button>

                <button className="text-black bg-white rounded-lg mt-4 mb-2 cursor-pointer" onClick={(e) => {
                    e.preventDefault();
                    console.log("save");
                    props.setSettingModal(false);
                }}>Save</button>
            </div>
                </div>
    </>
        )
}