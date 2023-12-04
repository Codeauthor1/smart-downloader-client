import { youtubeApi } from '@apis/youtube';
import { download, get } from '@utils/service';
import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { VideoDetails, relatedVideo, videoFormat } from 'ytdl-core';
import * as Clipboard from 'expo-clipboard';
import { Toast } from 'toastify-react-native';

interface VideoDownloaderContextProps {
    link: string;
    label: string;
    isLoading: boolean;
    videoFormats: videoFormat[] | undefined;
    relatedVideos: relatedVideo[] | undefined;
    videoDetails: VideoDetails| undefined;
    selectedFormat: videoFormat | undefined;
    updateLink: (text: string) => void;
    pasteLink: () => void;
    downloadVideo: () => void;
    searchVideo: () => void;
    selectVideoFormat: (label: string, format: videoFormat) => void;
}

interface VideoDownloaderContextProviderProps {
    children: React.ReactNode;
}

interface GetReturn {
    videoFormat: videoFormat[];
    videoDetails: VideoDetails;
    relatedVideos: relatedVideo[];
};

const defaultValue: VideoDownloaderContextProps = {
    downloadVideo: () => undefined,
    pasteLink: () => undefined,
    searchVideo: () => undefined,
    selectVideoFormat: () => undefined,
    updateLink: () => undefined,
    isLoading: false,
    label: '',
    link: '',
    selectedFormat: undefined,
    videoFormats: undefined,
    relatedVideos: undefined,
    videoDetails: undefined,
};

export const VideoDownloaderContext: React.Context<VideoDownloaderContextProps> = React.createContext(defaultValue);



export const VideoDownloaderContextProvider: React.FunctionComponent<VideoDownloaderContextProviderProps> = ({ children }) => {
    const [link, setLink] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [videoFormats, setVideoFormats] = useState<videoFormat[]>([]);
    const [videoDetails, setVideoDetails] = useState<VideoDetails>();
    const [relatedVideos, setRelatedVideos] = useState<relatedVideo[]>([]);
    const [label, setLabel] = useState('');
    const [selectedFormat, setSelectedFormat] = useState<videoFormat>();

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
     
            if(!relatedVideos || !videoDetails || !videoFormat ) {
                setLoading(false);
                return;
            }
            setVideoFormats(videoFormat);
            setRelatedVideos(relatedVideos);
            setVideoDetails(videoDetails);
            setLoading(false);
        } catch(error) {
            Toast.error('Error', "Error: cannot paste link");
        }
    }

    const selectVideoFormat: (label: string, format: videoFormat) => void = useCallback(
         (label, format) => {
        setLabel(label);
        setSelectedFormat(format);
    }, []
    )
    
    const downloadVideo: () => Promise<void> = async () => {
        try {
            if(!selectedFormat || !videoDetails) return;
            await download(selectedFormat, videoDetails);
        } catch(error) {
             Toast.error('Error', JSON.stringify(error))
        }
   
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