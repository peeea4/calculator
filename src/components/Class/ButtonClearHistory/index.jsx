import React, { Component } from "react";
import { ThemeContext } from "@/themeContext";
import ButtonClearHistoryWrapper from "./styled";

class ButtonClearHistory extends Component {
    clearClickHandler = () => {
        localStorage.removeItem("history");
    };

    render() {
        const { theme } = this.context;
        return (
            <ButtonClearHistoryWrapper
                onClick={this.clearClickHandler}
                color={theme}
            >
                Clear All History
            </ButtonClearHistoryWrapper>
        );
    }
}

ButtonClearHistory.contextType = ThemeContext;

export default ButtonClearHistory;
