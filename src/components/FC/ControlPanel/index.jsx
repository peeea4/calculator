import React from "react";
import ThemeToggler from "@/components/FC/ThemeToggler";
import ButtonClearHistory from "@/components/FC/ButtonClearHistory";
import ControlPanelWrapper from "./styled";

const ControlPanel = () => (
    <ControlPanelWrapper>
        <ThemeToggler />
        <ButtonClearHistory />
    </ControlPanelWrapper>
);

export default ControlPanel;
