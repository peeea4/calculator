import React, { Component } from "react";

import { ThemeContext } from "@/themeContext";
import { modalNav, NavBarContext } from "@/navBarContext";
import { modalHistory, HistoryContext } from "@/historyContext";

import NavBarPhone from "@/components/Class/NavBarPhone";
import NavBar from "@/components/Class/NavBar";
import History from "@/components/Class/History";

import {
    HeaderWrapper,
    HistoryWrapper,
} from "@/components/Class/Header/styled";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarStatus: modalNav.navBarIsOpen,
            historyStatus: modalHistory.historyIsOpen,
        };
    }

    toggleHistory = (status) => {
        this.setState(() => ({ historyStatus: status }));
    };

    toggleNavBar = (status) => {
        this.setState(() => ({ navBarStatus: status }));
    };

    modalClickHandler = (e) => {
        if (e.target.classList.contains("modal-wrapper")) {
            this.toggleHistory(false);
        }
    };

    render() {
        const { navBarStatus, historyStatus } = this.state;
        const { theme } = this.context;
        return (
            <NavBarContext.Provider
                value={{
                    navBarIsOpen: navBarStatus,
                    toggleNavBar: this.toggleNavBar,
                }}
            >
                <HistoryContext.Provider
                    value={{
                        historyIsOpen: historyStatus,
                        toggleHistory: this.toggleHistory,
                    }}
                >
                    <NavBarContext.Consumer>
                        {({ navBarIsOpen, toggleNavBar }) => (
                            <HistoryContext.Consumer>
                                {({ historyIsOpen, toggleHistory }) => (
                                    <HeaderWrapper color={theme}>
                                        <h1>Calculator App</h1>
                                        <NavBar />
                                        <NavBarPhone
                                            navBarIsOpen={navBarIsOpen}
                                            toggleNavBar={toggleNavBar}
                                            historyIsOpen={historyIsOpen}
                                            toggleHistory={toggleHistory}
                                        />
                                        {historyStatus ? (
                                            <HistoryWrapper
                                                className="modal-wrapper"
                                                onClick={this.modalClickHandler}
                                                color={theme}
                                            >
                                                <History />
                                            </HistoryWrapper>
                                        ) : null}
                                    </HeaderWrapper>
                                )}
                            </HistoryContext.Consumer>
                        )}
                    </NavBarContext.Consumer>
                </HistoryContext.Provider>
            </NavBarContext.Provider>
        );
    }
}

Header.contextType = ThemeContext;

export default Header;
