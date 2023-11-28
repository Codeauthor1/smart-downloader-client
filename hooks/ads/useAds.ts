import { AppOpenAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-2938490606918728/7953123584';

const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

// Preload an app open ad
// appOpenAd.load();

// Show the app open ad when user brings the app to the foreground.
// appOpenAd.show();

export default appOpenAd;
