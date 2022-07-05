import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { ThemeContext, themes } from "@/themeContext";
import { Layout } from "@/components/FC/Layout";

import Home from "@/pages/FC/Home";
import Settings from "@/pages/FC/Settings";
import AppWrapper from "./styled";

const App = () => {
    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggleTheme = (selectedTheme) => {
        setCurrentTheme(() =>
            themes[selectedTheme.target.value]
        );
    };

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            <AppWrapper backgroundColor={currentTheme.background}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                </Routes>
            </AppWrapper>
        </ThemeContext.Provider>
    );
};

export default App;
