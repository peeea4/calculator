import React, { Component } from "react";

import PropTypes from "prop-types";

import History from "@/components/Class/History";
import Display from "@/components/Class/Display";
import Keypad from "@/components/Class/Keypad";

import {
    AddCommand,
    DivCommand,
    MulCommand,
    SubCommand,
} from "@/utils/calculating";

import {
    DisplayKeypadWrapper,
    CalculatorWrapper,
} from "@/components/Class/Calculator/styled";

const executableCommands = {
    "/": DivCommand,
    "*": MulCommand,
    "+": AddCommand,
    "-": SubCommand,
};

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentExpression: "",
            numberStack: [],
            operatorStack: [],
            currentNumber: "",
            currentOperator: "",
        };
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.operatorStack);
        if (
            prevState.numberStack !== this.state.numberStack ||
            prevState.operatorStack !== this.state.operatorStack
        ) {
            if (
                this.state.numberStack.length >= 2 &&
                this.state.operatorStack.length >= 1
            ) {
                if (
                    this.state.operatorStack.indexOf("(") === -1 &&
                    this.state.operatorStack.indexOf(")") === -1 &&
                    (this.state.currentOperator !== "(" ||
                        this.state.currentOperator !== ")")
                ) {
                    this.props.calculator.execute(
                        new executableCommands[
                            this.state.operatorStack[
                                this.state.operatorStack.length - 1
                            ]
                        ](
                            +this.state.numberStack[
                                this.state.numberStack.length - 2
                            ],
                            +this.state.numberStack[
                                this.state.numberStack.length - 1
                            ],
                        ),
                    );
                    this.setState(() => ({
                        numberStack: [
                            String(this.props.calculator.getCurrentValue()),
                        ],
                    }));
                }
            }
        }
        if (prevState.currentOperator !== this.state.currentOperator) {
            if (this.state.currentOperator === "=") {
                this.setState((prevState) => ({
                    currentExpression:
                        prevState.currentExpression +
                        " " +
                        prevState.currentNumber +
                        " = ",
                }));
                this.setState((state, props) => ({
                    currentNumber: String(props.calculator.getCurrentValue()),
                }));
                localStorage.setItem(
                    "history",
                    JSON.stringify([
                        ...JSON.parse(localStorage.getItem("history") || "[]"),
                        `${this.state.currentExpression} ${
                            this.state.currentNumber
                        } = ${String(this.props.calculator.getCurrentValue())}`.trim(),
                    ]),
                );
            }
        }
    }

    changeState = (name, data) => {
        this.setState(() => ({
            [name]: data,
        }));
    };

    render() {
        return (
            <CalculatorWrapper>
                <DisplayKeypadWrapper>
                    <Display
                        currentExpression={this.state.currentExpression}
                        currentNumber={this.state.currentNumber}
                        numberStack={this.state.numberStack}
                    />
                    <Keypad {...this.state} changeState={this.changeState} />
                </DisplayKeypadWrapper>
                <History />
            </CalculatorWrapper>
        );
    }
}

Calculator.propTypes = {
    calculator: PropTypes.object,
};

export default Calculator;
