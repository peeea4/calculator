import React, { Component } from "react";

import PropTypes from "prop-types";

import Key from "@/components/Class/Key/";

import KeyPadWrapper from "@/components/Class/Keypad/styled";

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

class Keypad extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <KeyPadWrapper>
                {keys.map((key) => (
                    <Key key={key} value={key} {...this.props} />
                ))}
            </KeyPadWrapper>
        );
    }
}

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
