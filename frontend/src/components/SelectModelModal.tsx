interface SelectModelModalProps {
    model: string;
    setModel: React.Dispatch<React.SetStateAction<string>>;
    modelmodal: boolean;
    setModelmodal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SelectModelModal = (props: SelectModelModalProps) => {
    const hoverStyles = "bg-neutral-800/80 hover:bg-neutral-700/80 hover:scale-110 cursor-pointer transition-all duration-200";
  return (
    <div className="mx-2 p-2 bg-black">
        <div className="text-white space-y-2">
            <div className={`${hoverStyles} rounded-lg p-2 cursor-pointer`} onClick={() => {    
                props.setModel("GPT-4");
                props.setModelmodal(false);
                }}>
                <div className="">GPT-4</div>
            </div>
            <div className={`${hoverStyles} rounded-lg p-2 cursor-pointer`} onClick={() => {    
                props.setModel("GPT-4o");
                props.setModelmodal(false);
                }}>
                <div className="">GPT-4o</div>
            </div>
            <div className={`${hoverStyles} rounded-lg p-2 cursor-pointer`} onClick={() => {    
                props.setModel("Claude 3.5");
                props.setModelmodal(false);
                }}>
                <div className="">Claude 3.5</div>
            </div>
            <div className={`${hoverStyles} rounded-lg p-2 cursor-pointer`} onClick={() => {    
                props.setModel("Claude 3.7");
                props.setModelmodal(false);
                }}>
                <div className="">Claude 3.7</div>
            </div>
        </div>
    </div>
  )
}