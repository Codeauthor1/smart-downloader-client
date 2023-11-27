import { useTheme } from 'react-native-paper';
import { Text, View} from './Themed';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import VideoDownloader from './VideoDownloader';

const HomePage = () => {
  const theme = useTheme();
  return (
    <View style={styles.parentView}>
      <VideoDownloader />
      <View style={styles.featurePostView}>
        <Text style={{ ...styles.featurePost, color: theme.colors.onBackground }}>
          Curated stories for you</Text>
      </View>

      <ScrollView centerContent horizontal>
        <Text>Music</Text>
        <Text>Music</Text>
        <Text>Music</Text>
        <Text>Music</Text>
        <Text>Music</Text>
      </ScrollView>

    </View>
  )
};

const {width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  parentView: {
    width,
    flex: 1,
  },

  curatedTitle: {

  },
 
 
featurePostView: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  featurePost: {
    fontSize: 29,
  }
})

export default HomePage