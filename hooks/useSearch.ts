import { useState } from "react";
import { Alert } from "react-native";
import * as Clipboard from 'expo-clipboard';


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
    } catch (error) {
      Alert.alert("Error: cannot paste link")
    }
    }
    
    const downloadVideo: () => void = () => {
        setLoading(true);
        alert("Download");
        setTimeout(() => {
            setLoading(false);
        }, 5000)
  }


    return {
        link,
        isLoading,
        updateLink,
        pasteLink,
        downloadVideo
    }
}
