import { Searchbar, useTheme } from 'react-native-paper';
import { Text, View} from './Themed';
import React from 'react';
import { useSearch } from '../hooks/useSearch';
import Button from './Button';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const HomePage = () => {
  const { url, setUrl } = useSearch();
  const theme = useTheme();
  return (
    <View style={styles.parentView}>
      <View style={{ ...styles.childView, backgroundColor: theme.colors.primary }}>
        <Searchbar
          onChangeText={setUrl}
          value={url} placeholder='Paste video url'
          style={{ backgroundColor: theme.colors.tertiary, ...styles.search }}
          icon={() => <Fontisto name="link2" size={18} color='#ffffff' />}
          placeholderTextColor="#ffffff"
        />
       
        <View style={{ ...styles.buttonView, backgroundColor: theme.colors.primary }}>
          <Button title='Paste Link' />
          <Button title='Download' color='#ffffff' titleColor={theme.colors.scrim} />
        </View>
      </View>

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
  childView: {
    width,
    height: 250,
    paddingVertical: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
  },
  buttonView: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "89%"
  },
  search: {
    width: 350,
    borderRadius: 0,
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