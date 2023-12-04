import { StyleSheet, Dimensions, Alert } from 'react-native';
import { View, Text } from '@component/widgets/themed';
import DefaultVideoPlayer from 'expo-video-player'
import { useSearch } from '@hooks/useSearch';
import { ResizeMode } from 'expo-av'
import React, { useContext } from 'react';
import { VideoDownloaderContext } from '@context/VideoDownloaderContext';


const VideoPlayer: React.FunctionComponent = () => {

    const { videoDetails, videoFormats } = useContext(VideoDownloaderContext);
    
    if(!videoDetails || !videoFormats) return null;
    
    return (
        <View style={styles.view}>
            <DefaultVideoPlayer
                videoProps={{
                    resizeMode: ResizeMode.CONTAIN,
                    style: styles.VideoView,

                    source: {uri: videoFormats[0].url},
                    videoStyle: {
                        height: 220,
                        width: '100%'
                    }

                }}
                style={{
                    height: 220,
                }}
                errorCallback={({message}) => Alert.alert(message)}
                
            />
            <Text style={styles.videoTitle}>{  videoDetails.title }</Text>

        </View>
    )
}

export default VideoPlayer

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    view: {
        height: 'auto',
        width: '100%',
        margin:3
    },
    VideoView: {
        height: 250,
    },
    videoTitle: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 24,
        paddingVertical: 10
    },
})