import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { View, Text } from './themed'
import { useTheme } from 'react-native-paper';
import CuratedScrollButton from './CurratedScrollButton';



const CurratedTitle: React.FunctionComponent = () => {

    const theme = useTheme();
    const colorSchema = useColorScheme();

    const curatedTextColor = colorSchema === 'dark' ? theme.colors.onBackground : '#000000'
  
    return (
        <>
            <View style={styles.view}>
                <Text
                    style={{
                        ...styles.title,
                        color: curatedTextColor
                    }}
                >
                    Curated stories for you
                </Text>
            </View>
            <CuratedScrollButton />
        </>
    )
};


const styles = StyleSheet.create({
    view: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    title: {
        fontSize: 29,
    }
});

export default CurratedTitle;