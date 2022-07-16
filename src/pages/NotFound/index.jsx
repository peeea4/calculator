import { ThemeContext } from "@/themeContext";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NotFoundWrapper from "./styled";

const NotFound = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <NotFoundWrapper theme={theme}>
            <p>Page Not Found</p>
            <div>
                <NavLink to="/class/home">Go to class-component app</NavLink>
                <NavLink to="/functional/home">
                    Go to functional-component app
                </NavLink>
            </div>
        </NotFoundWrapper>
    );
};

export default NotFound;
