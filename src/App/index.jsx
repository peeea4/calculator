import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeContext, themes } from "@/themeContext";
import Layout from "@/components/FC/Layout";

import Home from "@/pages/FC/Home";
import Settings from "@/pages/FC/Settings";
import AppWrapper from "./styled";

const App = () => {
    const savedTheme = JSON.parse(localStorage.getItem("theme")) || "light";

    const [currentTheme, setCurrentTheme] = useState(themes[savedTheme]);

    const toggleTheme = (selectedTheme) => {
        setCurrentTheme(() => themes[selectedTheme.target.value]);
        localStorage.setItem(
            "theme",
            JSON.stringify(selectedTheme.target.value),
        );
    };

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            <AppWrapper
                data-name="app"
                backgroundColor={currentTheme.background}
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
};

export default App;
