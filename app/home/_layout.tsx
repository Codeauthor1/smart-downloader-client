
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { View } from '@component/widgets/themed';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

function HomeLayout() {
    const theme = useTheme()

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
                        <View style={{ backgroundColor: theme.colors.primary, paddingRight: '20%' }}>
                            <Pressable>
                                {({ pressed }) => (
                                    <Ionicons
                                        name="ios-help-buoy"
                                        size={24}
                                        color={theme.colors.onBackground}
                                        style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </View>
                    ),

                    headerRight: () => (
                        <View style={{ backgroundColor: theme.colors.primary }}>
                            <Link href="/splashPage" asChild>
                                <Pressable>
                                    {({ pressed }) => (
                                        <Feather
                                            name="help-circle"
                                            size={24}
                                            color={theme.colors.onBackground}
                                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
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