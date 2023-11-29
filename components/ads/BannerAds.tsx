
import { bannerAdsID } from 'constants/adsID';
import React from 'react'
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

const adUnitId = __DEV__ ? TestIds.BANNER : bannerAdsID;

const BannerAds: React.FunctionComponent = () => (
  <BannerAd
    unitId={adUnitId}
    size={BannerAdSize.INLINE_ADAPTIVE_BANNER}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
  />
);

export default BannerAds