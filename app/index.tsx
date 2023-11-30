import mobileAds from 'react-native-google-mobile-ads';
import VideoDownloader from '@component/VideoDownloader';
import { View } from '@component/Themed';
import 'expo-dev-client';
import BannerAds from '@component/ads/BannerAds';
import '@hooks/ads/useAds';
import SelectVideoFormat from '@component/home/SelectVideoFormat';
import { ScrollView } from 'react-native';
import RelatedVideo from '@component/home/relatedVideo';
import VideoPlayer from '@component/home/videoPlayer';
import { useSearch } from '@hooks/useSearch';
 


export default function HomePage() {

  const { searchVideo, videoFormat, downloadVideo, isLoading, link, pasteLink, updateLink, label,selectVideoFormat,uri } = useSearch()

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
       
        <VideoDownloader
          searchVideo={searchVideo}
          isLoading={isLoading}
          link={link}
          pasteLink={pasteLink}
          updateLink={updateLink}
        />
      
        <BannerAds />

        {
          videoFormat.length > 0 ? <>
            <VideoPlayer uri={ uri} />
            <SelectVideoFormat format={videoFormat} selectVideoFormat={selectVideoFormat} label={ label} />
          </> : null
        }
        
        <RelatedVideo />

      </ScrollView>
    </View>
  );
};