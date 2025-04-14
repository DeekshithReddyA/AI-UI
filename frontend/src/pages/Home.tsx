import { useState } from "react"
import { Navbar } from "../components/Navbar";
import { SelectModelModal } from "../components/SelectModelModal";
import { SettingsModal } from "../components/SettingModal";

export const Home = () => {
    const [model, setModel] = useState<string>("GPT-4.1");
    const [modelmodal, setModelmodal] = useState<boolean>(false);
    const [settingModal , setSettingModal] = useState<boolean>(false);
    return (
        <div className="h-screen w-screen bg-neutral-800">
            <Navbar setSettingModal={setSettingModal} modelmodal={modelmodal} setModelmodal={setModelmodal} model={model} setModel={setModel} />
            <div className="flex">
            {modelmodal && <SelectModelModal setSettingModal={setSettingModal} model={model} setModel={setModel} modelmodal={modelmodal} setModelmodal={setModelmodal} />}
            </div>
            <div className="flex items-center justify-center">
            {settingModal && <SettingsModal setSettingModal={setSettingModal} />}
            </div>
        </div>
    )
}