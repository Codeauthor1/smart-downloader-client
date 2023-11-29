import { useState } from "react";
import { Alert } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { post } from "@utils/axiosService";
import { youtubeApi } from "@apis/youtube";


interface UseSearchReturn {
    link: string;
    isLoading: boolean;
    updateLink: (text: string) => void;
    pasteLink: () => void;
    downloadVideo: () => void;
}

export const useSearch: () => UseSearchReturn = () => {
  const [link, setLink] = useState('');
  const [isLoading, setLoading] = useState(false);


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
    
  const downloadVideo: () => Promise<void> = async () => {

    try {
      setLoading(true);
      await post(youtubeApi, link);

      setTimeout(() => {
        setLoading(false);
      }, 5000);
      
    } catch(error) {
      Alert.alert('An error occurred');
    }
   
  };


  return {
    link,
    isLoading,
    updateLink,
    pasteLink,
    downloadVideo
  }
};
