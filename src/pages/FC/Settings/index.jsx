import React, { useContext } from "react";

import ControlPanel from "@/components/FC/ControlPanel";
import { ThemeContext } from "@/themeContext";
import SettingsWrapper from "./styled";

const Settings = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <SettingsWrapper data-name="settings-page" color={theme}>
            <h2>Settings</h2>
            <ControlPanel />
        </SettingsWrapper>
    );
};

export default Settings;
