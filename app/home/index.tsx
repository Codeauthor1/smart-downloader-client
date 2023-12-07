import VideoSearch from '@component/VideoSearch';
import { View } from '@component/widgets/themed';
import SelectVideoFormat from '@component/home/SelectVideoFormat';
import { ScrollView } from 'react-native';
import RelatedVideo from '@component/home/relatedVideo';
import VideoPlayer from '@component/home/videoPlayer';
import CurratedPost from '@component/widgets/CurratedPost';
import { VideoProvider } from '@providers/videoProvider';
 


export default function HomePage() {

  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }}>
      <ScrollView centerContent>
        <VideoProvider>
          
          <VideoSearch />
      

          <VideoPlayer />
          <SelectVideoFormat />
          {/* <RelatedVideo />
          <CurratedPost /> */}
        </VideoProvider>
      </ScrollView>
    </View>
  );
};