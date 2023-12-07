import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider as DefaultThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import ToastManager from 'toastify-react-native';
import "expo-dev-client";



import { PaperProvider } from 'react-native-paper';
import useThemed from '../hooks/useThemed';
import SplashPage from './splashPage';
import { Slot } from 'expo-router';
import ThemeProvider from '@providers/themeProvider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('@assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <SplashPage />;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { paperTheme, LightTheme } = useThemed();

  return (
    // <ThemeProvider>
      <PaperProvider theme={paperTheme}>
        <DefaultThemeProvider value={LightTheme} >
          <Slot />
          <ToastManager />
        
        </DefaultThemeProvider>
      </PaperProvider>
    // </ThemeProvider>
  );
};