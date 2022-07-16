import React, { useContext, useState } from "react";
import { ThemeContext } from "@/themeContext";
import HistoryItem from "@/components/FC/HitoryItem";
import { ButtonShowAll, HistoryWrapper } from "./styled";

const History = () => {
    const { theme } = useContext(ThemeContext);

    const [showMore, setShowMore] = useState(false);

    const history = JSON.parse(localStorage.getItem("history"));

    const numberOfItems = showMore ? history.length : 10;

    const handleClick = () => {
        setShowMore(!showMore);
    };

    return (
        <HistoryWrapper
            theme={theme}
        >
            <h3>History</h3>
            <div data-name="history">
                {history?.slice(0, numberOfItems)?.map((expression, index) => (
                    <HistoryItem key={index} expression={expression} />
                ))}
            </div>
            {history?.length > 10 ? (
                <ButtonShowAll onClick={handleClick} theme={theme}>
                    {showMore ? "Show all" : "Hide"}
                </ButtonShowAll>
            ) : null}
        </HistoryWrapper>
    );
};

export default History;
