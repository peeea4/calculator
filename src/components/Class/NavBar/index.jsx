import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "@/themeContext";

import NavBarWrapper from "@/components/Class/NavBar/styled";

class NavBar extends Component {
    render() {
        const { theme } = this.context;
        return (
            <NavBarWrapper theme={theme}>
                <NavLink to="home">Home</NavLink>
                <NavLink to="settings">Settings</NavLink>
            </NavBarWrapper>
        );
    }
}

NavBar.contextType = ThemeContext;

export default NavBar;
