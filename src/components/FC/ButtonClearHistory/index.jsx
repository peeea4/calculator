import React, { useContext } from "react";
import { ThemeContext } from "@/themeContext";
import ButtonClearHistoryWrapper from "./styled";

const ButtonClearHistory = () => {
    const { theme } = useContext(ThemeContext);

    const clearClickhandler = () => {
        localStorage.removeItem("history");
    };

    return (
        <ButtonClearHistoryWrapper onClick={clearClickhandler} color={theme}>
            Clear All History
        </ButtonClearHistoryWrapper>
    );
};

export default ButtonClearHistory;
