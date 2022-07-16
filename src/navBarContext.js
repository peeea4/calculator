import React from "react";

export const modalNav = {
    navBarIsOpen: false,
};

export const NavBarContext = React.createContext({
    navBarIsOpen: modalNav.navBarIsOpen,
    toggleNavBar: () => {},
});
