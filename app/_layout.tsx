import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Link, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import "expo-dev-client";


import { PaperProvider, useTheme } from 'react-native-paper';
import useThemed from '../hooks/useThemed';
import { Pressable, useColorScheme } from 'react-native';
import SplashPage from './splashPage';
import { View } from '@component/Themed';
import { Feather, Ionicons } from '@expo/vector-icons';

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
    return <SplashPage />;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { paperTheme, LightTheme } = useThemed()
  
  const preferredColorScheme = useColorScheme();

  const backgroundColor = preferredColorScheme === 'dark' ? '#f93961' : '#663399';
  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={LightTheme}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor
            },
          }}
        >
          <Stack.Screen
            name="index" options={{
              title: 'Smart Downloader',
              headerTitleStyle: {
                color: '#ffffff',
                fontSize: 24
              },
              
              headerLeft: () => (
                <View style={{ backgroundColor, paddingRight: '20%' }}>
                  <Pressable>
                    {({ pressed }) => (
                      <Ionicons
                        name="ios-help-buoy"
                        size={24}
                        color='#ffffff'
                        style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </View>
              ),

              headerRight: () => (
                <View style={{ backgroundColor }}>
                  <Link href="/modal" asChild>
                    <Pressable>
                      {({ pressed }) => (
                        <Feather
                          name="help-circle"
                          size={24}
                          color='#ffffff'
                          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                      )}
                    </Pressable>
                  </Link>
                </View>
              ),
            }}
          />

          <Stack.Screen name='modal' options={{presentation: 'modal'}}/>
        </Stack>
     </ThemeProvider>
    </PaperProvider>
  );
};
