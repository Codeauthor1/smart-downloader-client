import { useState } from "react";
import { Alert } from "react-native";
import * as Clipboard from 'expo-clipboard';


interface UseSearchReturn {
    link: string
    updateLink: (text: string) => void;
    pasteLink: () => void;
}

export const useSearch: () => UseSearchReturn = () => {
  const [link, setLink] = useState('');


    const updateLink: (text: string) => void = text => {
        setLink(text)
    }

    const pasteLink: () => Promise<void> = async () => {
    try {
      const link = await Clipboard.getStringAsync();
      setLink(prev => prev + link);
    } catch (error) {
      Alert.alert("Error: cannot paste link")
    }
  }

    return {
        link,
        updateLink,
        pasteLink
    }
}
