import { View} from './Themed';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import VideoDownloader from './VideoDownloader';
import CurratedTitle from './CurratedTitle';
import CurratedPost from './CurratedPost';
import interstitial from '../hooks/ads/useInterstitialAds';
import { AdEventType } from 'react-native-google-mobile-ads';
import Button from './Button';
// import { BannerAd, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';


const HomePage = () => {

   const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  // No advert ready to show yet
  // if (!loaded) {

  return (
    <View style={styles.parentView}>
      <VideoDownloader />

      <CurratedTitle />

      <CurratedPost />

       <Button
      title="Show Interstitial"
      onPress={() => {
        interstitial.show();
      }}
    />

      {/* <BannerAd unitId={TestIds.BANNER} size={"10%"} /> */}

    </View>
  )
};

const {width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  parentView: {
    width,
    flex: 1,
  },
})

export default HomePage