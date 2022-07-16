import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import NavBarButton from "@/components/FC/NavBarPhoneButton";

import { ThemeContext } from "@/themeContext";

import { NavBarPhoneWrapper, ModalWrapper, ShowHistoryBtn } from "./styled";
import { NavBarContext } from "@/navBarContext";
import { HistoryContext } from "@/historyContext";

const NavBarPhone = () => {
    const { theme } = useContext(ThemeContext);
    const { navBarIsOpen, toggleNavBar } = useContext(NavBarContext);
    const { toggleHistory } = useContext(HistoryContext);

    const historyClickHandler = () => {
        toggleNavBar(false);
        toggleHistory(true);
    };

    const modalClickHandler = (e) => {
        if (e.target.classList.contains("modal-wrapper")) {
            toggleNavBar(false);
        }
    };

    return navBarIsOpen ? (
        <ModalWrapper className="modal-wrapper" onClick={modalClickHandler}>
            <NavBarPhoneWrapper color={theme}>
                <NavLink to="home" onClick={() => toggleNavBar(false)}>
                    Home
                </NavLink>
                <NavLink to="settings" onClick={() => toggleNavBar(false)}>
                    Settings
                </NavLink>
                <ShowHistoryBtn color={theme} onClick={historyClickHandler}>
                    Show History
                </ShowHistoryBtn>
            </NavBarPhoneWrapper>
        </ModalWrapper>
    ) : (
        <NavBarButton />
    );
};

export default NavBarPhone;
