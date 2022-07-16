import React from "react";

import PropTypes from "prop-types";

import Key from "@/components/FC/Key/index";

import KeyPadWrapper from "@/components/FC/Keypad/styled";

const keys = [
    "C",
    "7",
    "8",
    "9",
    "*",
    "-",
    "4",
    "5",
    "6",
    "/",
    "+",
    "1",
    "2",
    "3",
    "=",
    ".",
    "(",
    "0",
    ")",
    "CE",
];

const Keypad = ({
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
    return (
        <KeyPadWrapper>
            {keys.map((key) => (
                <Key
                    key={key}
                    value={key}
                    numberStack={numberStack}
                    setNumberStack={setNumberStack}
                    operatorStack={operatorStack}
                    setOperatorStack={setOperatorStack}
                    currentNumber={currentNumber}
                    setCurrentNumber={setCurrentNumber}
                    currentOperator={currentOperator}
                    setCurrentOperator={setCurrentOperator}
                    currentExpression={currentExpression}
                    setCurrentExpression={setCurrentExpression}
                />
            ))}
        </KeyPadWrapper>
    );
};

Keypad.propTypes = {
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

export default Keypad;
