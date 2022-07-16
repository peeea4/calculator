import React, { useContext, useState } from "react";

import { ThemeContext } from "@/themeContext";
import { modalNav, NavBarContext } from "@/navBarContext";
import { modalHistory, HistoryContext } from "@/historyContext";

import NavBarPhone from "@/components/FC/NavBarPhone";
import NavBar from "@/components/FC/NavBar";
import History from "@/components/Class/History";

import { HeaderWrapper, HistoryWrapper } from "@/components/FC/Header/styled";

const Header = () => {
    const [navBarStatus, setNavBarStatus] = useState(modalNav.navBarIsOpen);
    const [historyStatus, setHistoryStatus] = useState(
        modalHistory.historyIsOpen,
    );

    const toggleHistory = (status) => {
        setHistoryStatus(status);
    };

    const toggleNavBar = (status) => {
        setNavBarStatus(status);
    };

    const modalClickHandler = (e) => {
        if (e.target.classList.contains("modal-wrapper")) {
            toggleHistory(false);
        }
    };

    const { theme } = useContext(ThemeContext);

    return (
        <NavBarContext.Provider
            value={{
                navBarIsOpen: navBarStatus,
                toggleNavBar,
            }}
        >
            <HistoryContext.Provider
                value={{
                    historyIsOpen: historyStatus,
                    toggleHistory,
                }}
            >
                <HeaderWrapper color={theme}>
                    <h1>Calculator App</h1>
                    <NavBar />
                    <NavBarPhone />
                    {historyStatus ? (
                        <HistoryWrapper
                            className="modal-wrapper"
                            onClick={modalClickHandler}
                            color={theme}
                        >
                            <History />
                        </HistoryWrapper>
                    ) : null}
                </HeaderWrapper>
            </HistoryContext.Provider>
        </NavBarContext.Provider>
    );
};

export default Header;
