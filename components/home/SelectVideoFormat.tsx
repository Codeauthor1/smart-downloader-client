import { StyleSheet, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import { List, Portal, useTheme } from 'react-native-paper';
import Button from '@component/widgets/button';
import { VideoDownloaderContext } from '@context/VideoDownloaderContext';
import { download } from '@utils/service';
import { AntDesign } from '@expo/vector-icons';
import { View } from '@component/widgets/themed';

const SelectVideoFormat: React.FunctionComponent = () => {
    const { videoFormats, selectVideoFormat, label, videoDetails, selectedFormat } = useContext(VideoDownloaderContext);
    const theme = useTheme();
    const [expanded, setExpanded] = React.useState(true);

    const handleAccordion = () => setExpanded(!expanded);

    const handleDownload: () => void = () => {
        if(!selectedFormat || !videoDetails) return;
        download(selectedFormat, videoDetails)
        return;
    }
    
    if(videoFormats?.length === 0 || !videoFormats) return null

    return (
        <List.Section style={styles.downloadView}>
            <Button title='Download' onPress={handleDownload} width={170} />
            <List.Accordion
                title={label || 'Select format'}
                style={styles.formatView}
                expanded={expanded}
                onPress={handleAccordion}
            >
                {
                    videoFormats.flatMap((videoFormat, index) => {
                        const { qualityLabel, hasAudio, hasVideo, container, url } = videoFormat;
                        // console.log('hasVideo: ', hasVideo);
                        // console.log('hasAudio: ', hasAudio);
                        return (
                            <List.AccordionGroup  key={index}>
                                <View style={styles.AccordionView}>
                                    <List.Item
                                    title={`${container} ${qualityLabel}`}
                                    onPress={() => selectVideoFormat(`${container} ${qualityLabel}`, videoFormat)}
                                    
                                />
                                {
                                    hasAudio ?  <AntDesign name="sound" size={18} color={ theme.colors.onBackground } /> : null
                               }
                                </View>
                            </List.AccordionGroup>
                        )
                    })
                }
            </List.Accordion>
        </List.Section>

    )
};

export default React.memo(SelectVideoFormat);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

    downloadView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        width
    },
    formatView: {
        alignSelf: 'flex-start',
        width: 170,
        borderRadius: 5,
    },
    AccordionView: {
        borderBottomColor: 'red',
        flexDirection: 'row',
        // borderBottomWidth: 44
    }
})