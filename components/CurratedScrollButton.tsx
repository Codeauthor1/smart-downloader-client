import { ScrollView, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import Button from './Button'
import { useTheme } from 'react-native-paper';

interface ScrollButtonProps {
    title: string;
}

const ScrollButton: React.FunctionComponent<ScrollButtonProps> = ({title}) => {
    const theme = useTheme();
    const colorSchema = useColorScheme();
    const curatedTextColor = colorSchema === 'dark' ? theme.colors.onBackground : '#000000'

    return (
        <Button
            width={100}
            style={{
                borderBottomColor: 'red',
                borderBottomWidth: 2,
            }}
            title={ title }
            onPress={() => ''}
            color={theme.colors.background}
            titleColor={curatedTextColor}
        />
    )
};

const CurratedScrollButton: React.FunctionComponent = () => {
  
  return (
      <ScrollView centerContent horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <ScrollButton title='Music' />
          <ScrollButton title='Feed' />
          <ScrollButton title='Entertainment' />
          <ScrollButton title='Sport' />
          <ScrollButton title='Drama' />
          <ScrollButton title='Short' />
          <ScrollButton title='Highlight' />
      </ScrollView>
  )
}


const styles = StyleSheet.create({
    scrollView: {
        maxHeight: 55
    }
})

export default CurratedScrollButton