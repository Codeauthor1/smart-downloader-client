import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { View, Text } from '@component/widgets/themed'
import { VideoDownloaderContext } from '@context/videoDownloaderContext';

const RelatedVideo = () => {
  const { relatedVideos } = useContext(VideoDownloaderContext);
  
  if(relatedVideos?.length === 0) return null;
  
  return (
    <View>
      <Text style={styles.title}>RelatedVideo</Text>
    </View>
  )
}

export default RelatedVideo

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '700',
        paddingLeft: 10
    }
})