import React from "react";

export const themes = {
    light: {
        foreground: "#434343", // чёрный
        background: "#FFFFFF", // белый
        backgroundLight: "rgba(255, 255, 255, 0.7)", // белый
    },
    dark: {
        foreground: "#FFFFFF", // белый
        background: "#434343", // чёрный
    },
    colored: {
        foreground: "#FFFFFF", // белый
        background: "#434343", // чёрный
    },
};

export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {},
});
