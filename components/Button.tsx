import { StyleSheet, Text, ViewStyle } from 'react-native';
import {Button as MyButton, useTheme } from 'react-native-paper';
import React from 'react';

interface Props {
  title: string
  color?: string
  width?: undefined | number;
  height?: undefined | number;
  isLoading?: boolean;
  disable?: boolean;
  titleColor?: string
  style?: ViewStyle,
  onPress: () => void
}
const Button: React.FunctionComponent<Props> = ({ title, titleColor, color , onPress, disable, isLoading, width, height, style}) => {
    const theme = useTheme();
  return (
    <MyButton
      loading={isLoading}
      disabled={disable}
      style={{ ...styles.button, width: width || '48%', height: height, ...style }}
      buttonColor={color || theme.colors.secondary}
      onPress={onPress}
    >
      <Text style={{ ...styles.title, color: titleColor || '#ffffff' }}>{title}</Text>
    </MyButton>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 54,
    borderRadius: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: "center",
    textAlignVertical: "center",
    height: 45,
  }
})
export default Button