import React from 'react';
import { VideoDetails, relatedVideo, videoFormat } from 'ytdl-core';


interface VideoDownloaderContextProps {
    link: string;
    label: string;
    isLoading: boolean;
    videoFormats: videoFormat[] | undefined;
    relatedVideos: relatedVideo[] | undefined;
    videoDetails: VideoDetails| undefined;
    selectedFormat: number | undefined;
    updateLink: (text: string) => void;
    pasteLink: () => void;
    downloadVideo: () => void;
    searchVideo: () => void;
    selectVideoFormat: (label: string, id: number) => void;
}

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
