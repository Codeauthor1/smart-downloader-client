import axios from "axios";
import { Alert } from "react-native";
import RNFetchBlob from 'rn-fetch-blob';

export const post: (endpoint: string, videoUrl: string) => Promise<void> = async (endpoint, videoUrl) => {
 
  RNFetchBlob
    .config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        title: "Smart downloader",
        // mime: "text/plain",
      },
      IOSBackgroundTask: true
    })
    .fetch('GET', `${endpoint}?url=${videoUrl}`)
    .progress({ count: 10 }, (received, total) => {
     
      console.log("progress", received / total);

    })
    .then((res) => {
      console.log('The file saved to ', res.path())
    }).catch(reason => {
      console.log('reason: ', reason);
      Alert.alert("Downloading failed")
    })
    
};



export const get: (endpoint: string) => Promise<void> = async (endpoint) => {
    const respond = await axios.get(endpoint)
    console.log('respond: ', respond);
    
}
