import { useState } from "react";
import { Alert } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { get,  download } from "@utils/service";
import { youtubeApi } from "@apis/youtube";
import { type videoFormat, type relatedVideo} from 'ytdl-core';

interface UseSearchReturn {
    link: string;
    uri: string;
    label: string;
    isLoading: boolean;
    videoFormat: videoFormat[];
    updateLink: (text: string) => void;
    pasteLink: () => void;
    downloadVideo: () => void;
    searchVideo: () => void;
    selectVideoFormat: (label: string, uri: string) => void;
}

export const useSearch: () => UseSearchReturn = () => {
  const [link, setLink] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [videoFormat, setVideoFormat] = useState<videoFormat[]>([]);
  const [label, setLabel] = useState('');
    const [uri, setUri] = useState('');


  const updateLink: (text: string) => void = text => {
    setLink(text)
  }

  const pasteLink: () => Promise<void> = async () => {
    try {
      const link = await Clipboard.getStringAsync();
      setLink(prev => prev + link);
    } catch(error) {
      Alert.alert("Error: cannot paste link")
    }
  }

  const searchVideo: () => Promise<void> = async () => {
   try {
     setLoading(true);

     const localVideoFormat = await get(youtubeApi, link);
     
     if(!localVideoFormat) {
       setLoading(false);
       return;
     }
      setVideoFormat(localVideoFormat);
     setLoading(false);
   } catch (error) {
    Alert.alert(JSON.stringify(error));
   }
  }

      const selectVideoFormat: (label: string, uri: string) => void = (label, uri) => {
        setLabel(label);
        setUri(uri);
    }
    
  const downloadVideo: () => Promise<void> = async () => {
    try {
      // await download()
    } catch(error) {
       Alert.alert(JSON.stringify(error));
    }
   
  };


  return {
    link,
    label,
    uri,
    isLoading,
    videoFormat,
    updateLink,
    pasteLink,
    searchVideo,
    downloadVideo,
    selectVideoFormat
  }
};
