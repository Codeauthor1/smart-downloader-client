import { Alert, Dimensions, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Fontisto } from '@expo/vector-icons'
import { Searchbar, useTheme } from 'react-native-paper'
import { useSearch } from '../hooks/useSearch'
import Button from './Button';

const VideoDownloader: React.FunctionComponent = () => {
  const { pasteLink, link, updateLink } = useSearch();
  const search: () => void = () => alert("Download")
  const theme = useTheme();
  const [isLoading, setLoading] = useState(false);

  
    
  return (
    <View style={{ ...styles.view, backgroundColor: theme.colors.primary }}>
      <Searchbar
        onChangeText={updateLink}
        value={link}
        placeholder='Paste video url'
        style={{ backgroundColor: theme.colors.tertiary, ...styles.search,  }}
        inputStyle={{color: "#ffffff"}}
        icon={() => <Fontisto name="link2" size={18} color='#ffffff' />}
        iconColor='#ffffff'
        placeholderTextColor="#ffffff"
        dataDetectorTypes='link'
        autoComplete='url'
        inputMode='url'
        textContentType='URL'
        keyboardType='url'
        onSubmitEditing={search}
        returnKeyType='search'
        accessible
        autoFocus
        blurOnSubmit
        enterKeyHint='search'
        importantForAutofill='auto'
        loading={isLoading}
        onIconPress={search}
      />
      <View style={{ ...styles.buttonView, backgroundColor: theme.colors.primary }}>
        <Button title='Paste Link' onPress={pasteLink}/>
        <Button title='Download' color='#ffffff' titleColor={theme.colors.scrim} onPress={search}/>
      </View>
    </View>
  )
};


const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
      view: {
    width,
    height: 250,
    paddingVertical: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    },
     search: {
    width: "90%",
    borderRadius: 0,
    },
      buttonView: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "89%"
  },
})

export default VideoDownloader