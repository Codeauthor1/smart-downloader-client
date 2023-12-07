import { VideoDownloaderContext } from "@context/videoDownloaderContext";
import { VideoDetails, relatedVideo, videoFormat } from "ytdl-core";
import * as Clipboard from 'expo-clipboard';
import { Toast } from 'toastify-react-native';
import { youtubeApi } from '@apis/endpoint';
import { download, get } from '@utils/service';
import { useCallback, useState } from 'react';
import * as FileSystem from 'expo-file-system';


interface VideoProviderProps {
    children: React.ReactNode;
}

type  SelectedFormat = number | undefined;

interface GetReturn {
    videoFormat: videoFormat[];
    videoDetails: VideoDetails;
    relatedVideos: relatedVideo[];
};

export const VideoProvider: React.FunctionComponent<VideoProviderProps> = ({ children }) => {
    const [link, setLink] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [videoFormats, setVideoFormats] = useState<videoFormat[]>([]);
    const [videoDetails, setVideoDetails] = useState<VideoDetails>();
    const [relatedVideos, setRelatedVideos] = useState<relatedVideo[]>([]);
    const [label, setLabel] = useState('');
    const [downloadProgress, setDownloadProgress] = useState<number>();
    const [selectedFormat, setSelectedFormat] = useState<SelectedFormat>();

    const updateLink: (text: string) => void = text => {
        setLink(text)
    }

    const pasteLink: () => Promise<void> = async () => {
        try {
            const link = await Clipboard.getStringAsync();
            setLink(prev => prev + link);
        } catch(error) {
            Toast.error('Error', "Error: cannot paste link")
        }
    }

    const searchVideo: () => Promise<void> = async () => {
        try {
            setLoading(true);
            const { relatedVideos, videoDetails, videoFormat }: GetReturn
                = await get(youtubeApi, link);
            
            const filteredFormat = videoFormat.filter(format => format.hasAudio && format.hasVideo);

            setVideoFormats(filteredFormat);

            setRelatedVideos(relatedVideos);
            setVideoDetails(videoDetails);
        } catch(error) {
            if(typeof error === "string")
                Toast.error(error, "top");
            else
                Toast.error("Ops!, something went wrong", "top")
        } finally {
    
            setLoading(false);
        }
    };

    const selectVideoFormat: (label: string, id: number) => void = useCallback(
         (label, id) => {
        setLabel(label);
        setSelectedFormat(id);
    }, [])

    
    const downloadVideo: () => Promise<void> = async () => {

        const callback = (downloadProgress: FileSystem.DownloadProgressData) => {
            const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
            setDownloadProgress(progress)
        };
    
        const downloadResumable = FileSystem.createDownloadResumable(
            'http://techslides.com/demos/sample-videos/small.mp4',
            FileSystem.documentDirectory + 'small.mp4',
            {cache: true},
            callback
            );
            console.log('downloadResumable: ', downloadResumable.fileUri);

        try {
            const resumeDownload = await downloadResumable.downloadAsync();
            console.log('Finished downloading to ', resumeDownload?.uri);
        } catch(e) {
            Toast.error('Ops! something went wrong', 'top')
        }
        
        // try {
        //     if(!selectedFormat || !videoDetails) return;
            // const downloadPath = `${FileSystem.cacheDirectory}/videos`;
            
            // const pathInfo = await FileSystem.getInfoAsync(downloadPath);
            
            // if (!pathInfo.exists) {
            //   console.log("videos directory doesn't exist, creating…");
            //   await FileSystem.makeDirectoryAsync(downloadPath, { intermediates: true });
            // }

            // const downloadInfo = await downloadResumable.downloadAsync();
            // console.log('Finished downloading to ', downloadInfo?.uri);
            // await download(videoFormats[selectedFormat], videoDetails);
   
    };

    return (
        <VideoDownloaderContext.Provider value={{
            label, 
            isLoading, 
            videoFormats, 
            selectedFormat, 
            relatedVideos, 
            videoDetails, 
            link, 
            updateLink, 
            pasteLink, 
            searchVideo, 
            downloadVideo, 
            selectVideoFormat
        }}>
            {children}
        </VideoDownloaderContext.Provider>
    )
};