import { AdMobBanner} from "expo-ads-admob";

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-2938490606918728/7953123584';
const BannerAds = () => {

  return (
      <View>
          <AdMobBanner
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-2938490606918728/7953123584"
              servePersonalizedAds
          />
    </View>
  )
}

export default BannerAds

const styles = StyleSheet.create({})