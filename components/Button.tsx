import { StyleSheet, Text } from 'react-native';
import {Button as MyButton, useTheme } from 'react-native-paper';
import React from 'react';

interface Props {
  title: string
  color?: string
  titleColor?: string
}
const Button: React.FunctionComponent<Props> = ({ title, titleColor, color }) => {
    const theme = useTheme();
  return (
    <MyButton style={{ ...styles.button, backgroundColor: color || theme.colors.secondary }}>
      <Text style={{ ...styles.title, color: titleColor || '#ffffff' }}>{title}</Text>
    </MyButton>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 54,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '400'
  }
})
export default Button