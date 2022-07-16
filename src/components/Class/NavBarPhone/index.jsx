import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import NavBarPhoneButton from "@/components/Class/NavBarPhoneButton";

import { ThemeContext } from "@/themeContext";

import { NavBarPhoneWrapper, ModalWrapper, ShowHistoryBtn } from "./styled";
import { NavBarContext } from "@/navBarContext";

class NavBarPhone extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    historyClickHandler = () => {
        this.props.toggleNavBar(false);
        this.props.toggleHistory(true);
    };

    modalClickHandler = (e) => {
        if (e.target.classList.contains("modal-wrapper")) {
            this.props.toggleNavBar(false);
        }
    };

    render() {
        const { theme } = this.context;
        return this.props.navBarIsOpen ? (
            <ModalWrapper
                className="modal-wrapper"
                onClick={this.modalClickHandler}
            >
                <NavBarPhoneWrapper color={theme}>
                    <NavLink
                        to="home"
                        onClick={() => this.props.toggleNavBar(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="settings"
                        onClick={() => this.props.toggleNavBar(false)}
                    >
                        Settings
                    </NavLink>
                    <ShowHistoryBtn
                        color={theme}
                        onClick={this.historyClickHandler}
                    >
                        Show History
                    </ShowHistoryBtn>
                </NavBarPhoneWrapper>
            </ModalWrapper>
        ) : (
            <NavBarContext.Consumer>
                {({ navBarIsOpen, toggleNavBar }) => (
                    <NavBarPhoneButton
                        navBarIsOpen={navBarIsOpen}
                        toggleNavBar={toggleNavBar}
                    />
                )}
            </NavBarContext.Consumer>
        );
    }
}

NavBarPhone.contextType = ThemeContext;

export default NavBarPhone;
