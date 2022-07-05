import { ThemeContext } from "@/themeContext";
import React, { useContext } from "react";
import ThemeTogglerWrapper from "./styled";

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <ThemeTogglerWrapper>
            <h3>Switch Theme</h3>
            <select name="" id="" onChange={toggleTheme}>
                <option value="light">Light Theme</option>
                <option value="colored">Colored Theme</option>
                <option value="dark">Dark Theme</option>
            </select>
        </ThemeTogglerWrapper>
    );
};

export default ThemeToggler;
