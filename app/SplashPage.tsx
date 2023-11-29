import { StyleSheet, Text, View, Image } from 'react-native'
import { useTheme } from 'react-native-paper'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import appOpenAd from '@hooks/ads/useAds';

const SplashPage = () => {
    const theme = useTheme();
    // appOpenAd.load();
    // appOpenAd.show();
  return (
      <View style={{ ...styles.splashView, backgroundColor: '#f93961'}}>
          <MaterialCommunityIcons name="progress-download" size={100} color='#ffffff' />
          <View>
            <Text style={{ ...styles.text, ...styles.rightAlignText}}>Smart</Text>
            <Text style={styles.text}>Downloader</Text>
         </View>
    </View>
  )
}

export default SplashPage

const styles = StyleSheet.create({
    splashView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        fontSize: 34
    },
    rightAlignText: {
        textAlign: 'right'
    }
})