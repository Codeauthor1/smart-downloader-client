import React from "react";
import { ColorSchemeName } from "react-native";

interface ThemeContext {
    theme: ColorSchemeName,
    toggleTheme: () => Promise<undefined>
}

const defaultProps: ThemeContext = {
    theme: 'light',
    toggleTheme: async () => undefined
}
export const ThemeContext: React.Context<ThemeContext> = React.createContext(defaultProps);
