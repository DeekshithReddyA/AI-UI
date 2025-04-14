interface SettingsModalProps {
    setSettingModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SettingsModal = (props: SettingsModalProps) => {
    return (
        <div className="p-10 m-10">   
            Settings
        </div>
        )
}