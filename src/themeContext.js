import React from "react";

export const themes = {
    light: {
        foreground: "#434343", // чёрный
        background: "#FFFFFF", // белый
        backgroundHover: "#d1d1d1",
        backgroundLight: "#707070", // тёмно - серый
        headerbackground: "#434343",
        keyBackground: "#FFFFFF",
        white: "#FFFFFF",
        navColor: "#FFFFFF",
        navColorDark: "#cccccc",
    },
    dark: {
        foreground: "#FFFFFF", // белый
        background: "#1f1f1f", // чёрный
        backgroundHover: "#434343",
        backgroundLight: "rgba(255, 255, 255, 0.7)", // светло - белый
        headerbackground: "#2e2e2e",
        white: "#FFFFFF",
        keyBackground: "rgb(38, 38, 38)",
        navColor: "#FFFFFF",
        navColorDark: "rgba(255, 255, 255, 0.7)",
    },
};

export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {},
});
