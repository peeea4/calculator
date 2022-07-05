import ControlPanel from "@/components/FC/ControlPanel";
import React from "react";
import SettingsWrapper from "./styled";

const Settings = () => {
    return (
        <SettingsWrapper>
            <h2>Settings</h2>
            <ControlPanel />
        </SettingsWrapper>
    );
};
export default Settings;
