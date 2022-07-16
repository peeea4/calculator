import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import { ThemeContext, themes } from "@/themeContext";

import Home from "@/pages/Class/Home";
import Settings from "@/pages/Class/Settings";
import AppWrapper from "./styled";
import Layout from "@/components/Class/Layout";

class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTheme:
                themes[JSON.parse(localStorage.getItem("theme")) || "light"],
        };
    }

    toggleTheme = (selectedTheme) => {
        this.setState(() => ({
            currentTheme: themes[selectedTheme.target.value],
        }));
        localStorage.setItem(
            "theme",
            JSON.stringify(selectedTheme.target.value),
        );
    };

    render() {
        const { currentTheme } = this.state;
        return (
            <ThemeContext.Provider
                value={{
                    theme: currentTheme,
                    toggleTheme: this.toggleTheme,
                }}
            >
                <AppWrapper
                    backgroundColor={this.state.currentTheme.background}
                    data-name="app"
                >
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="home" element={<Home />} />
                            <Route path="settings" element={<Settings />} />
                        </Route>
                    </Routes>
                </AppWrapper>
            </ThemeContext.Provider>
        );
    }
}

export default AppClass;
