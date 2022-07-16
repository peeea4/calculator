import React, { Component } from "react";
import Calculator from "@/components/Class/Calculator";
import { CalculatorCreater } from "@/utils/calculating";
import ErrorBoundary from "@/components/Class/ErrorBoundary";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calculator: new CalculatorCreater(),
        };
    }

    render() {
        const { calculator } = this.state;

        return (
            <ErrorBoundary>
                <Calculator calculator={calculator} />
            </ErrorBoundary>
        );
    }
}

export default Home;
