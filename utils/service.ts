import axios, { AxiosResponse, isAxiosError } from "axios";
import { Alert } from "react-native";
import RNFetchBlob from 'rn-fetch-blob';
import { type videoFormat } from "ytdl-core";

export const get: (endpoint: string, videoUrl: string) => Promise<videoFormat[] | void> = async (endpoint, videoUrl) => {
  try {
    const {data} = await axios<string, AxiosResponse<videoFormat[]>>(`${endpoint}?url=${videoUrl}`)
    return data;
  } catch(error) {
    const isAxiosErr = isAxiosError(error);

    if(!isAxiosErr) return Alert.alert("Ops! somethong went wrong, please try again");
    
    return error.response?.data
  }
};



export const download: (endpoint: string, format: videoFormat, title: string) => Promise<void> = async (...arg) => {
  const [endpoint, format, title] = arg;
  const docPath = RNFetchBlob.fs.dirs.DocumentDir;
  const path = `${docPath}/${title}.txt`;


  RNFetchBlob
    .config({
      fileCache: true,
      path,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mime: format.mimeType,
        title,
        description: 'Download completed successfully'
      },
      IOSBackgroundTask: true
    })
    .fetch('GET', endpoint)
    // .fetch('GET', `https://www.bing.com/images/search?view=detailV2&ccid=G5yGqPPQ&id=E705860B2ECECD1088A0EB71BD6677DAC4106418&thid=OIP.G5yGqPPQ-zRyamFvX9smEAHaD5&mediaurl=https%3a%2f%2fstatic0.hotcarsimages.com%2fwordpress%2fwp-content%2fuploads%2f2020%2f07%2famerican-cars-faster-than-ferrari-f8.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1b9c86a8f3d0fb34726a616f5fdb2610%3frik%3dGGQQxNp3Zr1x6w%26pid%3dImgRaw%26r%3d0&exph=900&expw=1710&q=car&simid=608052621068357217&FORM=IRPRST&ck=34CA3F17FA442CA3C53FC87C6E36460C&selectedIndex=2`)
    .progress({ count: 10 }, (received, total) => {
      console.log("progress", received / total);
    })
    .then((res) => {

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
