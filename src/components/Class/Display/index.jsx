import React, { PureComponent } from "react";

import PropTypes from "prop-types";

import { ThemeContext } from "@/themeContext";

import ErrorBoundary from "@/components/Class/ErrorBoundary";

import {
    CurrentHistoryWrapper,
    DisplayWrapper,
    InputWrapper,
} from "@/components/Class/Display/styled";

class Display extends PureComponent {
    render() {
        const { currentNumber, currentExpression, numberStack } = this.props;
        const { theme } = this.context;
        return (
            <ErrorBoundary>
                <DisplayWrapper theme={theme}>
                    <CurrentHistoryWrapper
                        data-name="approved expression"
                        theme={theme}
                    >
                        {(`${numberStack[numberStack.length - 1]}` ===
                        "undefined"
                            ? ""
                            : `( ${numberStack[numberStack.length - 1]} ) `) +
                            currentExpression || "0"}
                    </CurrentHistoryWrapper>
                    <InputWrapper
                        value={currentNumber || "0"}
                        theme={theme}
                        onChange={() => {}}
                    />
                </DisplayWrapper>
            </ErrorBoundary>
        );
    }
}

Display.propTypes = {
    currentNumber: PropTypes.string,
    currentExpression: PropTypes.string,
    numberStack: PropTypes.array,
};

Display.contextType = ThemeContext;

export default Display;
