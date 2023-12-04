import mobileAds from 'react-native-google-mobile-ads';
import VideoSearch from '@component/VideoSearch';
import { View } from '@component/widgets/themed';
import 'expo-dev-client';
import BannerAds from '@component/ads/BannerAds';
import '@hooks/ads/useAds';
import SelectVideoFormat from '@component/home/SelectVideoFormat';
import { ScrollView } from 'react-native';
import RelatedVideo from '@component/home/relatedVideo';
import VideoPlayer from '@component/home/videoPlayer';
import CurratedPost from '@component/widgets/CurratedPost';
import { VideoDownloaderContextProvider } from '@context/VideoDownloaderContext';
import ToastManager from 'toastify-react-native'
 


export default function HomePage() {


  mobileAds()
    .initialize()
    .then(adapterStatuses => {
      console.log('Initialization complete!');
    });

  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }}>
      <ScrollView centerContent>
        <ToastManager />
        <VideoDownloaderContextProvider>
          
          <VideoSearch />
      
          <BannerAds />

          <VideoPlayer />
          <SelectVideoFormat />
          {/* <RelatedVideo />
          <CurratedPost /> */}
        </VideoDownloaderContextProvider>
      </ScrollView>
    </View>
  );
};