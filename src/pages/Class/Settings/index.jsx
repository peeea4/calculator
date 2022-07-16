import React, { Component } from "react";

import { ThemeContext } from "@/themeContext";
import SettingsWrapper from "./styled";
import ControlPanel from "@/components/Class/ControlPanel";

class Settings extends Component {
    render() {
        return (
            <SettingsWrapper
                data-name="settings-page"
                color={this.context.theme}
            >
                <h2>Settings</h2>
                <ControlPanel />
            </SettingsWrapper>
        );
    }
}

Settings.contextType = ThemeContext;

export default Settings;
