import React, { Component } from "react";

import { ThemeContext } from "@/themeContext";

import ThemeTogglerWrapper from "./styled";

class ThemeToggler extends Component {
    render() {
        return (
            <ThemeTogglerWrapper color={this.context.theme}>
                <h3>Switch Theme</h3>
                <select onChange={this.context.toggleTheme}>
                    <option value="light">Light Theme</option>
                    <option value="dark">Dark Theme</option>
                </select>
            </ThemeTogglerWrapper>
        );
    }
}

ThemeToggler.contextType = ThemeContext;

export default ThemeToggler;
