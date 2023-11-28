
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-2938490606918728/7953123584';

const BannerAds: React.FunctionComponent = () => (
  <BannerAd
    unitId={adUnitId}
    size={BannerAdSize.FULL_BANNER}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
  />
);

export default BannerAds

const styles = StyleSheet.create({})