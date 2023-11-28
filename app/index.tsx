import mobileAds from 'react-native-google-mobile-ads';
import { Redirect } from 'expo-router';
import 'expo-dev-client';

export default function RedirectToHomePage() {

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    console.log(adapterStatuses);
    // Initialization complete!
  });

  return (
  <Redirect href="/HomePage" />
  );
}