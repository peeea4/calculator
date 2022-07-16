import React, { useContext } from "react";

import PropTypes from "prop-types";

import { ThemeContext } from "@/themeContext";
import {
    CurrentHistoryWrapper,
    DisplayWrapper,
    InputWrapper,
} from "@/components/FC/Display/styled";
import ErrorBoundary from "@/components/Class/ErrorBoundary";

const Display = ({ currentNumber, currentExpression, numberStack }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <ErrorBoundary>
            <DisplayWrapper theme={theme}>
                <CurrentHistoryWrapper
                    data-name="approved expression"
                    theme={theme}
                >
                    {(`${numberStack[numberStack.length - 1]}` === "undefined"
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
};

Display.propTypes = {
    currentNumber: PropTypes.string,
    currentExpression: PropTypes.string,
    numberStack: PropTypes.array,
};

export default Display;
