import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import { useTheme } from 'react-native-paper';
import { Entypo, Feather, Ionicons, SimpleLineIcons} from '@expo/vector-icons';
import { View } from '../../components/Themed';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name:  React.ComponentProps<typeof Entypo>['name'];
  color: string;
}) {
  return <Entypo size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.background,
        title: "Home",
        headerStyle: {
          backgroundColor: theme.colors.primary,
          height: 120,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          height: 80,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 10
        }
      }}>
      <Tabs.Screen
        name="HomePage"
        options={{
          title: 'Smart Downloader',
          headerTitleStyle: {
            color: theme.colors.onBackground,
            fontSize: 24,
            left: 50,
          },
          
          tabBarIcon: ({ color }) => <SimpleLineIcons name="home" size={24} color={color} />,
          headerLeft: () => (
            <View style={{ backgroundColor: theme.colors.primary }}>
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
              <Link href="/modal" asChild>
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

      <Tabs.Screen
        name='RealPage'
      />
    </Tabs>
  );
}
