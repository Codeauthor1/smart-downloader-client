
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { View } from '@widgets/themed';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import { useContext } from 'react';
import { ThemeContext } from '@context/themeContext';
import { Toast } from 'toastify-react-native';


function HomeLayout() {
    const theme = useTheme();
    const {theme: themeState, toggleTheme} = useContext(ThemeContext);

    const notify: () => void = () => Toast.info('Coming  Soon', 'top');


    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.primary
                },
            }}
        >
            <Stack.Screen
                name="index" options={{
                    title: 'Smart Downloader',
                    headerTitleStyle: {
                        color: theme.colors.onBackground,
                        fontSize: 24
                    },
              
                    headerLeft: () => (
                        <View style={{ backgroundColor: theme.colors.primary, paddingRight: '5%' }}>
                            <Pressable onPress={notify}>
                                {({ pressed }) => (
                                    <Entypo
                                        name={themeState === 'dark' ? 'light-up' : "light-down"}
                                        size={28}
                                        color={theme.colors.onBackground}
                                        style={{ opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </View>
                    ),

                    headerRight: () => (
                        <View style={{ backgroundColor: theme.colors.primary }}>
                            <Link href="/download/" asChild>
                                <Pressable>
                                    {({ pressed }) => (
                                        <MaterialCommunityIcons
                                            name="progress-download"
                                            size={28}
                                            color={theme.colors.onBackground}
                                            style={{ opacity: pressed ? 0.5 : 1 }}
                                        />
                                    )}
                                </Pressable>
                            </Link>
                        </View>
                    ),
                }}
            />

        </Stack>
    );
};

export default HomeLayout;