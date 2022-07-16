import React, { Component } from "react";

import PropTypes from "prop-types";

import { ThemeContext } from "@/themeContext";

import StyledKeyButton from "@/components/Class/Key/styled";

const ops = ["/", "*", "+", "-"];

class Key extends Component {
    constructor(props) {
        super(props);
    }
    buttonClickHandler = () => {
        if (ops.includes(this.props.value)) {
            if (
                ops.includes(this.props.currentExpression.slice(-1)) &&
                !this.props.currentNumber
            ) {
                this.props.changeState(
                    "currentExpression",
                    this.props.currentExpression.slice(0, -1) +
                        this.props.value,
                );
            } else {
                this.props.changeState("currentOperator", this.props.value);
                this.props.changeState(
                    "currentExpression",
                    `${this.props.currentExpression} ${this.props.currentNumber} ${this.props.value}`,
                );
            }

            if (
                this.props.currentNumber &&
                this.props.currentOperator !== "="
            ) {
                this.props.changeState("numberStack", [
                    ...this.props.numberStack,
                    this.props.currentNumber,
                ]);
            }
            this.props.changeState("currentNumber", "");
        }

        if (this.props.value === "=") {
            if (this.props.currentOperator) {
                this.props.changeState("operatorStack", [
                    ...this.props.operatorStack,
                    this.props.currentOperator,
                ]);
            }
            if (this.props.currentNumber) {
                this.props.changeState("numberStack", [
                    ...this.props.numberStack,
                    this.props.currentNumber,
                ]);
            }
            this.props.changeState("currentOperator", this.props.value);
        }

        if (this.props.value === "(" || this.props.value === ")") {
            if (this.props.currentNumber) {
                this.props.changeState("numberStack", [
                    ...this.props.numberStack,
                    this.props.currentNumber,
                ]);
            }
            if (this.props.currentOperator) {
                this.props.changeState("operatorStack", [
                    ...this.props.operatorStack,
                    this.props.currentOperator,
                ]);
            }
            this.props.changeState("currentOperator", this.props.value);
            this.props.changeState(
                "currentExpression",
                `${this.props.currentExpression} ${this.props.currentNumber} ${this.props.value}`,
            );
            this.props.changeState("currentNumber", "");
        }

        if (
            (+this.props.value >= 0 && +this.props.value <= 9) ||
            this.props.value === "."
        ) {
            if (
                this.props.currentOperator &&
                this.props.currentOperator !== "="
            ) {
                this.props.changeState("operatorStack", [
                    ...this.props.operatorStack,
                    this.props.currentOperator,
                ]);
                this.props.changeState("currentOperator", "");
                this.props.changeState(
                    "currentNumber",
                    this.props.currentNumber + this.props.value,
                );
            } else if (
                this.props.currentOperator &&
                this.props.currentOperator === "="
            ) {
                this.props.changeState("currentNumber", this.props.value);
                this.props.changeState("currentOperator", "");
                this.props.changeState("numberStack", []);
                this.props.changeState("currentExpression", "");
            } else {
                this.props.changeState(
                    "currentNumber",
                    this.props.currentNumber + this.props.value,
                );
            }
        }
        if (this.props.value === "CE") {
            this.props.changeState(
                "currentNumber",
                this.props.currentNumber.substring(
                    0,
                    this.props.currentNumber.length - 1,
                ),
            );
        }
        if (this.props.value === "C") {
            this.props.changeState("numberStack", []);
            this.props.changeState("operatorStack", []);
            this.props.changeState("currentNumber", "");
            this.props.changeState("currentOperator", "");
            this.props.changeState("currentExpression", "");
        }
    };

    render() {
        const { value } = this.props;
        return (
            <StyledKeyButton
                data-value={value}
                onClick={this.buttonClickHandler}
                theme={this.context.theme}
            >
                {value}
            </StyledKeyButton>
        );
    }
}

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

Key.contextType = ThemeContext;

export default Key;
