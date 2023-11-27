import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native'

const useThemed = () => {
    const colorScheme = useColorScheme();
    const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });

  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? {
        ...MD3DarkTheme, colors: {
          ...theme.dark,
          primary: '#f93961',
          secondary: '#fd8394',
          tertiary: '#fe8191',
          scrim: '#fa779c',
        }
      }
      : { ...MD3LightTheme, colors: theme.light };

  return {paperTheme, LightTheme}
}

export default useThemed