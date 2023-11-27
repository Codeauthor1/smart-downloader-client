/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, useColorScheme, View as DefaultView, ViewProps, SafeAreaView as DefaultSafeAreaView } from 'react-native';

import { TextProps, useTheme } from 'react-native-paper';



export function Text(props: TextProps<Text>) {
  const { style,  ...otherProps } = props;
  const theme = useTheme();
  // const preferredColorScheme = useColorScheme()

  const color = theme.colors.onBackground;


  return <DefaultText style={[{color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
   const theme = useTheme();
  
  const backgroundColor =  theme.colors.background

  return <DefaultView style={[{ backgroundColor}, style]} {...otherProps} />;
}

export function SafeAreaView(props: ViewProps) {
  const { style, ...otherProps } = props;
   const theme = useTheme();
  
  const backgroundColor =  theme.colors.background

  return <DefaultSafeAreaView style={[{ backgroundColor}, style]} {...otherProps} />;
}

