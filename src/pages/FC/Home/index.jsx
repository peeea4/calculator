import React from "react";

import Calculator from "@/components/FC/Calculator";

import { CalculatorCreater } from "@/utils/calculating";
import ErrorBoundary from "@/components/Class/ErrorBoundary";

const Home = () => {
    const calculator = new CalculatorCreater();

    return (
        <ErrorBoundary>
            <Calculator calculator={calculator} />
        </ErrorBoundary>
    );
};

export default Home;
