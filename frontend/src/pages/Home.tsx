import { useState } from "react"
import { Navbar } from "../components/Navbar";
import { SelectModelModal } from "../components/SelectModelModal";
import { SettingsModal } from "../components/SettingModal";
import { ChatInterface } from "../components/ChatInterface";
import { Input } from "../components/Input";

export const Home = () => {
    const [model, setModel] = useState<string>("GPT-4.1");
    const [modelmodal, setModelmodal] = useState<boolean>(false);
    const [settingModal , setSettingModal] = useState<boolean>(false);

    return (
        <div className="h-screen w-screen flex flex-col bg-neutral-800">
            <Navbar 
                setSettingModal={setSettingModal} 
                modelmodal={modelmodal} 
                setModelmodal={setModelmodal} 
                model={model} 
                setModel={setModel} 
            />

            {/* Modals */}
            {modelmodal && (
                <div className="absolute z-10">
                    <SelectModelModal 
                        setSettingModal={setSettingModal} 
                        model={model} 
                        setModel={setModel} 
                        modelmodal={modelmodal} 
                        setModelmodal={setModelmodal} 
                    />
                </div>
            )}
            {settingModal && (
                <div className="absolute z-10">
                    <SettingsModal setSettingModal={setSettingModal} />
                </div>
            )}

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="text-white bg-neutral-900 w-1/6 h-full">
                    Sidebar
                </div>

                {/* Chat Section */}
                <div className="flex flex-col flex-1 h-full">
                    <div className="flex-1 overflow-y-auto p-4">
                        <ChatInterface />
                    </div>
                    <div className="p-4">
                        <Input />
                    </div>
                </div>
            </div>
        </div>
    );
}
