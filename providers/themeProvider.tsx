import React, { useState } from 'react'
import { ThemeContext } from '@context/themeContext';
import * as SecureStore from 'expo-secure-store';
import { useColorScheme, ColorSchemeName } from 'react-native';

interface ProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FunctionComponent<ProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ColorSchemeName>(undefined);
    


    const toggleTheme = async () => {

        const localTheme = await SecureStore.getItemAsync('theme');
        
        if(!localTheme) {
            const preferredTheme = useColorScheme();
            setTheme(preferredTheme)
        } else {
            setTheme(localTheme => localTheme === 'dark' ? 'light' : 'light');
            if(theme)
                SecureStore.setItemAsync('theme', theme);
        }


        return undefined
    }
  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>{ children }</ThemeContext.Provider>
  )
}

export default ThemeProvider