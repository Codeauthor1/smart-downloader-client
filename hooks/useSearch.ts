import { useMemo, useState } from "react";
import { Alert } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { get,  download } from "@utils/service";
import { youtubeApi } from "@apis/youtube";
import { type videoFormat, type relatedVideo, type VideoDetails } from 'ytdl-core';

interface AxiosGetReturn {
  videoFormat: videoFormat[],
  relatedVideo: relatedVideo[],
  VideoDetails: VideoDetails[]
}

interface UseSearchReturn {
    link: string;
    uri: string;
    label: string;
    isLoading: boolean;
    videoFormat: videoFormat[];
    updateLink: (text: string) => void;
    pasteLink: () => Promise<void>;
    downloadVideo: () => Promise<void>;
    searchVideo: () => Promise<string | undefined>;
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


  const searchVideo: () => Promise<string | undefined> = async () => {
    try {
      setLoading(true);

      const localVideoFormat: AxiosGetReturn = await get(youtubeApi, link);
      console.log('localVideoFormat: ', localVideoFormat);
     
      // if(!localVideoFormat) {
      //   setLoading(false);
      //   return;
      // }

      // const filterVideoFormat = useMemo(() => {
       
      //   const filteredLocalVideoFormat = localVideoFormat.filter(video => video.hasVideo);
      //   console.log('filteredLocalVideoFormat: ', filteredLocalVideoFormat);

      //   return filteredLocalVideoFormat;
       
      // }, []);

      // setVideoFormat(filterVideoFormat);
      // console.log('filterVideoFormat: ', filterVideoFormat);
      // console.log('filterVideoFormat: ', filterVideoFormat.length);
    } catch(error) {
      return JSON.stringify(error);
    } finally {
      setLoading(false);
    }
  };

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
