import React from "react";

export const modalHistory = {
    historyIsOpen: false,
};

export const HistoryContext = React.createContext({
    historyIsOpen: modalHistory.historyIsOpen,
    toggleHistory: () => {},
});
