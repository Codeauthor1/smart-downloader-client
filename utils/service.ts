import axios, { AxiosResponse, isAxiosError } from "axios";
import { Alert } from "react-native";
import RNFetchBlob from 'rn-fetch-blob';
import { VideoDetails, type videoFormat } from "ytdl-core";


export const get: (endpoint: string, videoUrl: string) => Promise<any | void> = async (endpoint, videoUrl) => {
  try {
    const { data } = await axios<string, AxiosResponse<any>>(`${endpoint}?url=${videoUrl}`)
    return data;
  } catch(error) {
    const isAxiosErr = isAxiosError(error);
    if(!isAxiosErr) return "Ops! somethong went wrong, please try again";
    return error.response?.data
  }
};



export const download: ( videoFormat: videoFormat, videoDetails: VideoDetails) => Promise<void> = async (videoFormat, videoDetails) => {
  const filePath = RNFetchBlob.fs.dirs.DocumentDir;
  const path = `${filePath}/${videoDetails.title}.${videoFormat.container}`;
  console.log('path: ', path);

  RNFetchBlob
    .config({
      fileCache: true,
      path,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mime: videoFormat.mimeType,
        title: videoDetails.title,
      },
      IOSBackgroundTask: true
    })
    .fetch('GET', videoFormat.url)
    .progress({ count: 10 }, (received, total) => {
      console.log("progress", received / total);
    })
    .then((res) => {
      console.log('res: ', res);

      if(!res) return null;

      const { status } = res.info();
      if(status === 200) {
        console.log('The file saved to ', res.path(), res.info())
      } else {
        console.log('Error ', res.info())

      }

    }).catch(reason => {
      console.log('reason: ', reason);
      Alert.alert("Downloading failed")
    })
}
