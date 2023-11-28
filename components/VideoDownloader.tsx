import { Alert, Dimensions, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Fontisto } from '@expo/vector-icons'
import { Searchbar, useTheme } from 'react-native-paper'
import { useSearch } from '../hooks/useSearch'
import Button from './Button';

const VideoDownloader: React.FunctionComponent = () => {
  const { pasteLink, link, updateLink, isLoading, downloadVideo } = useSearch();
  const theme = useTheme();

  
    
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
        onSubmitEditing={downloadVideo}
        returnKeyType='search'
        accessible
        autoFocus
        blurOnSubmit
        enterKeyHint='search'
        importantForAutofill='auto'
        loading={isLoading}
        onIconPress={downloadVideo}
      />
      <View style={{ ...styles.buttonView, backgroundColor: theme.colors.primary }}>
        <Button style={styles.button} title='Paste Link' onPress={pasteLink} disable={isLoading}/>
        <Button
          title='Download'
          color={theme.colors.onBackground}
          titleColor={theme.colors.scrim}
          isLoading={isLoading}
          disable={isLoading}
          onPress={downloadVideo}
          style={styles.button}
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
  },
  button: {
    borderRadius: 5,
  }
});

export default VideoDownloader