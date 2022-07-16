import React, { PureComponent } from "react";
import ThemeToggler from "@/components/Class/ThemeToggler";
import ButtonClearHistory from "@/components/Class/ButtonClearHistory";
import ControlPanelWrapper from "@/components/FC/ControlPanel/styled";

class ControlPanel extends PureComponent {
    render() {
        return (
            <ControlPanelWrapper>
                <ThemeToggler />
                <ButtonClearHistory />
            </ControlPanelWrapper>
        );
    }
}

export default ControlPanel;
