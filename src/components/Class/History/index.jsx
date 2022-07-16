import React, { Component } from "react";

import { ThemeContext } from "@/themeContext";

import { ButtonShowAll, HistoryWrapper } from "./styled";

import HistoryItem from "@/components/Class/HitoryItem";

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
        };
    }

    handleClick() {
        this.setState((state) => ({ showMore: !state.showMore }));
    }

    render() {
        const history = JSON.parse(localStorage.getItem("history"));
        const numberOfItems = this.state.showMore ? history?.length : 10;
        const { theme } = this.context;
        return (
            <HistoryWrapper className="history" theme={theme}>
                <h3>History</h3>
                <div data-name="history">
                    {history
                        ?.slice(0, numberOfItems)
                        ?.map((expression, index) => (
                            <HistoryItem key={index} expression={expression} />
                        ))}
                </div>
                {history?.length > 10 ? (
                    <ButtonShowAll
                        onClick={() => this.handleClick()}
                        theme={theme}
                    >
                        {!this.state.showMore ? "Show all" : "Hide"}
                    </ButtonShowAll>
                ) : null}
            </HistoryWrapper>
        );
    }
}

History.contextType = ThemeContext;

export default History;
