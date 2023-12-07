import { Alert, Dimensions, StyleSheet, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Fontisto } from '@expo/vector-icons'
import { Searchbar, useTheme } from 'react-native-paper'
import Button from './widgets/button';
import { VideoDownloaderContext } from '@context/videoDownloaderContext'
import { Toast } from 'toastify-react-native'


const VideoSearch: React.FunctionComponent = () => {
  const theme = useTheme();
  const { searchVideo, updateLink, link, isLoading, pasteLink} = useContext(VideoDownloaderContext);
  
  const gate = () => {
    searchVideo();
  }

  
    
  return (
    <View style={{ ...styles.view, backgroundColor: theme.colors.primary }}>
      <Searchbar
        onChangeText={updateLink}
        value={link}
        placeholder='Paste video url'
        style={{ backgroundColor: theme.colors.tertiary, ...styles.search,  }}
        inputStyle={{color: theme.colors.onBackground}}
        icon={() => <Fontisto name="link2" size={18} color={theme.colors.onBackground} />}
        iconColor={theme.colors.onBackground}
        placeholderTextColor={theme.colors.onBackground}
        dataDetectorTypes='link'
        autoComplete='url'
        inputMode='url'
        textContentType='URL'
        keyboardType='url'
        onSubmitEditing={gate}
        returnKeyType='search'
        accessible
        autoFocus
        blurOnSubmit
        enterKeyHint='search'
        importantForAutofill='auto'
        loading={isLoading}
        onIconPress={gate}
      />
      <View style={{ ...styles.buttonView, backgroundColor: theme.colors.primary }}>
        <Button title='Paste Link' onPress={pasteLink} disable={isLoading}/>
        <Button
          title='Search'
          color={theme.colors.onBackground}
          titleColor={theme.colors.scrim}
          isLoading={isLoading}
          disable={isLoading}
          onPress={gate}
        />
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
    marginBottom: 20
  },
  search: {
    width: "90%",
    borderRadius: 5,

  },
  buttonView: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "89%"
  }
});

export default VideoSearch;