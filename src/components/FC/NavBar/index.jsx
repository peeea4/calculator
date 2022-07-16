import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "@/themeContext";

import NavBarWrapper from "@/components/FC/NavBar/styled";

const NavBar = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <NavBarWrapper theme={theme}>
            <NavLink to="home">Home</NavLink>
            <NavLink to="settings">Settings</NavLink>
        </NavBarWrapper>
    );
};

export default NavBar;
