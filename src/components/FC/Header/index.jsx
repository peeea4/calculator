import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "@/themeContext";

import HeaderWrapper from "@/components/FC/Header/styled";

const Header = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <HeaderWrapper color={theme}>
            <h1>Calculator App</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </nav>
        </HeaderWrapper>
    );
};
export default Header;
