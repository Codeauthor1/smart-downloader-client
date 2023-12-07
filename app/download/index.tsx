import { StyleSheet, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Text, SafeAreaView, View } from '@widgets/themed';
import { ProgressBar } from 'react-native-paper';
import Button from '@component/widgets/button';
import { VideoDownloaderContext } from '@context/videoDownloaderContext';
// import * as VideoThumbnails from 'expo-video-thumbnails';


const DownloadingPage = () => {
  const { downloadVideo } = useContext(VideoDownloaderContext);

  const [image, setImage] = useState('');

  // const generateThumbnail = async () => {
  //   try {
  //     const { uri } = await VideoThumbnails.getThumbnailAsync(
  //       'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  //       {
  //         time: 15000,
  //       }
  //     );
  //     setImage(uri);
  //   } catch(e) {
  //     console.warn(e);
  //   }
  // };

  useEffect(() => {
    // generateThumbnail();
  }, [])
  

  return (
    <SafeAreaView style={styles.view}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.rowItemView}>
        <Text style={{ color: 'red' }}>Video title</Text>
        <ProgressBar progress={0.5} color='red' style={styles.progressBar} />
        <Button onPress={downloadVideo} title='Download' />
      </View>
    </SafeAreaView>
  )
};

export default DownloadingPage

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  rowItemView: {
    flexDirection: 'row'
  },
  image: {
    height: 100,
    width: 100
  },
  progressBar: {
    height: 15
  }
})