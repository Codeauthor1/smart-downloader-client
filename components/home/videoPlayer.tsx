import { StyleSheet, Dimensions } from 'react-native';
import { View, Text } from '@component/Themed';
import DefaultVideoPlayer from 'expo-video-player'
import { useSearch } from '@hooks/useSearch';
import { ResizeMode } from 'expo-av'
import React from 'react';

interface SelectVideoFormatProps {
    uri: string
}

const VideoPlayer: React.FunctionComponent<SelectVideoFormatProps> = ({uri}) => {
    
    return (
        <View style={styles.view}>
            <DefaultVideoPlayer
                videoProps={{
                    resizeMode: ResizeMode.CONTAIN,
                    style: styles.VideoView,

                    source: {uri},
                    videoStyle: {
                        height: 220,
                        width: '100%'
                    }
                }}
                style={{
                    height: 220,
                }}
            />
            <Text style={styles.videoTitle}>Title</Text>

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