import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import History from "@/components/FC/History/";
import Display from "@/components/FC/Display";
import Keypad from "@/components/FC/Keypad";

import {
    AddCommand,
    DivCommand,
    MulCommand,
    SubCommand,
} from "@/utils/calculating";

import {
    DisplayKeypadWrapper,
    CalculatorWrapper,
} from "@/components/FC/Calculator/styled";

const executableCommands = {
    "/": DivCommand,
    "*": MulCommand,
    "+": AddCommand,
    "-": SubCommand,
};

const Calculator = ({ calculator }) => {
    const [currentExpression, setCurrentExpression] = useState("");
    const [numberStack, setNumberStack] = useState([]);
    const [operatorStack, setOperatorStack] = useState([]);
    const [currentNumber, setCurrentNumber] = useState("");
    const [currentOperator, setCurrentOperator] = useState("");
    useEffect(() => {
        if (numberStack.length >= 2 && operatorStack.length >= 1) {
            if (
                operatorStack.indexOf("(") === -1 &&
                operatorStack.indexOf(")") === -1 &&
                (currentOperator !== "(" || currentOperator !== ")")
            ) {
                calculator.execute(
                    new executableCommands[
                        operatorStack[operatorStack.length - 1]
                    ](
                        +numberStack[numberStack.length - 2],
                        +numberStack[numberStack.length - 1],
                    ),
                );
                setNumberStack([String(calculator.getCurrentValue())]);
            }
        }
    }, [numberStack, operatorStack]);

    useEffect(() => {
        if (currentOperator === "=") {
            setCurrentExpression(
                currentExpression + " " + currentNumber + " = ",
            );
            setCurrentNumber(String(calculator.getCurrentValue()));
            localStorage.setItem(
                "history",
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem("history") || "[]"),
                    `${currentExpression} ${currentNumber} = ${String(
                        calculator.getCurrentValue(),
                    )}`.trim(),
                ]),
            );
        }
    }, [currentOperator]);

    return (
        <CalculatorWrapper>
            <DisplayKeypadWrapper>
                <Display
                    currentNumber={currentNumber}
                    currentExpression={currentExpression}
                    numberStack={numberStack}
                />
                <Keypad
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
            </DisplayKeypadWrapper>
            <History />
        </CalculatorWrapper>
    );
};

Calculator.propTypes = {
    calculator: PropTypes.object,
};

export default Calculator;
