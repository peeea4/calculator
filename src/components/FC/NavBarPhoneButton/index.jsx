import { NavBarContext } from "@/navBarContext";
import { ThemeContext } from "@/themeContext";
import React, { useContext } from "react";
import NavBarPhoneButtonWrapper from "@/components/FC/NavBarPhoneButton/styled";

const NavBarPhoneButton = () => {
    const { theme } = useContext(ThemeContext);
    const { toggleNavBar } = useContext(NavBarContext);
    const modalClickHandler = () => {
        toggleNavBar(true);
    };
    return (
        <NavBarPhoneButtonWrapper onClick={modalClickHandler} theme={theme}>
            <span></span>
            <span></span>
            <span></span>
        </NavBarPhoneButtonWrapper>
    );
};

export default NavBarPhoneButton;
