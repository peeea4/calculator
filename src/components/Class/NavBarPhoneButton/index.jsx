import React, { Component } from "react";
import { ThemeContext } from "@/themeContext";

import NavBarPhoneButtonWrapper from "@/components/Class/NavBarPhoneButton/styled";

class NavBarPhoneButton extends Component {
    modalClickHandler = () => {
        this.props.toggleNavBar(true);
    };
    render() {
        const { theme } = this.context;
        return (
            <NavBarPhoneButtonWrapper
                onClick={this.modalClickHandler}
                theme={theme}
            >
                <span></span>
                <span></span>
                <span></span>
            </NavBarPhoneButtonWrapper>
        );
    }
}

NavBarPhoneButton.contextType = ThemeContext;

export default NavBarPhoneButton;
