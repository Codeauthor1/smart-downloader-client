import mobileAds from 'react-native-google-mobile-ads';
import VideoDownloader from '@component/VideoDownloader';
import { View } from '@component/Themed';
import 'expo-dev-client';
import BannerAds from '@component/ads/BannerAds';
import '@hooks/ads/useAds';
 


export default function HomePage() {

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    console.log('Initialization complete!');
  });

  return (
    <View style={{
      flex: 1,
      alignItems: 'center'
    }}>
       
      <VideoDownloader />
      
      <BannerAds />

   </View>
  );
}