import React, { useContext } from "react";

import PropTypes from "prop-types";

import { ThemeContext } from "@/themeContext";

import StyledKeyButton from "@/components/FC/Key/styled";

const ops = ["/", "*", "+", "-"];

const Key = ({
    value,
    numberStack,
    setNumberStack,
    operatorStack,
    setOperatorStack,
    currentNumber,
    setCurrentNumber,
    currentOperator,
    setCurrentOperator,
    currentExpression,
    setCurrentExpression,
}) => {
    const { theme } = useContext(ThemeContext);

    const buttonClickHandler = () => {
        if (ops.includes(value)) {
            if (ops.includes(currentExpression.slice(-1)) && !currentNumber) {
                setCurrentExpression(currentExpression.slice(0, -1) + value);
            } else {
                setCurrentOperator(value);
                setCurrentExpression(
                    `${currentExpression} ${currentNumber} ${value}`,
                );
            }
            if (currentNumber && currentOperator !== "=") {
                setNumberStack([...numberStack, currentNumber]);
            }
            setCurrentNumber("");
        }

        if (value === "=") {
            if (currentOperator) {
                setOperatorStack([...operatorStack, currentOperator]);
            }
            if (currentNumber) {
                setNumberStack([...numberStack, currentNumber]);
            }
            setCurrentOperator(value);
        }

        if (value === "(" || value === ")") {
            if (currentNumber) {
                setNumberStack([...numberStack, currentNumber]);
            }
            if (currentOperator) {
                setOperatorStack([...operatorStack, currentOperator]);
            }
            setCurrentOperator(value);
            setCurrentExpression(
                `${currentExpression} ${currentNumber} ${value}`,
            );
            setCurrentNumber("");
        }
        if ((+value >= 0 && +value <= 9) || value === ".") {
            if (currentOperator && currentOperator !== "=") {
                setOperatorStack([...operatorStack, currentOperator]);
                setCurrentOperator("");
                setCurrentNumber(currentNumber + value);
            } else if (currentOperator && currentOperator === "=") {
                setCurrentNumber(value);
                setCurrentOperator("");
                setNumberStack([]);
                setCurrentExpression("");
            } else {
                setCurrentNumber(currentNumber + value);
            }
        }
        if (value === "CE") {
            setCurrentNumber(
                currentNumber.substring(0, currentNumber.length - 1),
            );
        }
        if (value === "C") {
            setNumberStack([]);
            setOperatorStack([]);
            setCurrentNumber("");
            setCurrentOperator("");
            setCurrentExpression("");
        }
    };

    return (
        <StyledKeyButton
            data-value={value}
            onClick={buttonClickHandler}
            theme={theme}
        >
            {value}
        </StyledKeyButton>
    );
};

Key.propTypes = {
    value: PropTypes.string,
    numberStack: PropTypes.array,
    setNumberStack: PropTypes.func,
    operatorStack: PropTypes.array,
    setOperatorStack: PropTypes.func,
    currentNumber: PropTypes.string,
    setCurrentNumber: PropTypes.func,
    currentOperator: PropTypes.string,
    setCurrentOperator: PropTypes.func,
    currentExpression: PropTypes.string,
    setCurrentExpression: PropTypes.func,
};

export default Key;
