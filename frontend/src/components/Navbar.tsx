import { ChevronDown } from "../icons/Chevron-Down"
import { Settings } from "../icons/Settings";
interface NavbarProps {
    modelmodal: boolean;
    setModelmodal: React.Dispatch<React.SetStateAction<boolean>>;
    model: string;
    setModel: React.Dispatch<React.SetStateAction<string>>;
    setSettingModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Navbar = (props: NavbarProps) => {
  return (
    <div className={`h-12 w-full bg-neutral-800 flex items-center justify-between border`}>
      <div className={`m-2 ml-4 p-1 flex items-center cursor-pointer hover:bg-neutral-700/80 ${props.modelmodal ? "bg-neutral-700/80" : "bg-neutral-800"} rounded-lg hover:scale-110 transition-all duration-200`}
            onClick={(e) => {
             e.preventDefault();
            props.setModelmodal(!props.modelmodal);
            props.setSettingModal(false);
            }}>
        <div className="text-lg font-bold text-white">
            {props.model}
        </div>
        <div className="text-white">
            <ChevronDown />
        </div>
      </div>
      <div className="mr-5 text-white hover:scale-110 cursor-pointer transition-all duration-200"
            onClick={
                (e) => {
                    e.preventDefault();
                    props.setSettingModal(true);
                    props.setModelmodal(false);
                }
            }>
        <Settings />
      </div>
    </div>
  )
}