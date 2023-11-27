import { StyleSheet, Text } from 'react-native';
import {Button as MyButton, useTheme } from 'react-native-paper';
import React from 'react';

interface Props {
  title: string
  color?: string
  titleColor?: string
  onPress: () => void
}
const Button: React.FunctionComponent<Props> = ({ title, titleColor, color , onPress}) => {
    const theme = useTheme();
  return (
    <MyButton style={{ ...styles.button, backgroundColor: color || theme.colors.secondary }} onPress={onPress}>
      <Text style={{ ...styles.title, color: titleColor || '#ffffff' }}>{title}</Text>
    </MyButton>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 54,
    width: "48%",
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