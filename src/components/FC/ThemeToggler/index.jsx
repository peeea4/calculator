import React, { useContext } from "react";
import { ThemeContext } from "@/themeContext";

import ThemeTogglerWrapper from "./styled.js";

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <ThemeTogglerWrapper color={theme}>
            <h3>Switch Theme</h3>
            <select onChange={toggleTheme}>
                <option value="light">Light Theme</option>
                <option value="dark">Dark Theme</option>
            </select>
        </ThemeTogglerWrapper>
    );
};

export default ThemeToggler;
