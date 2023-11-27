import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import "expo-dev-client";


import { PaperProvider, Text, useTheme } from 'react-native-paper';
import useThemed from '../hooks/useThemed';
import { useColorScheme } from 'react-native';
import HomeHeader from '../components/HomeHeader';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { paperTheme, LightTheme } = useThemed()
  
    const theme = useTheme();
  const preferredColorScheme = useColorScheme();
  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={LightTheme}>
         <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
        </Stack>
     </ThemeProvider>
    </PaperProvider>
  );
}
