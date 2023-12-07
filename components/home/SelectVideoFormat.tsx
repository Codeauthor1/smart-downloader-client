import { StyleSheet, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import { List } from 'react-native-paper';
import Button from '@component/widgets/button';
import { VideoDownloaderContext } from '@context/videoDownloaderContext';

const SelectVideoFormat: React.FunctionComponent = () => {
    const { videoFormats, selectVideoFormat, label, downloadVideo } = useContext(VideoDownloaderContext);
    const [expanded, setExpanded] = React.useState(true);

    const handleAccordion = () => setExpanded(!expanded);
    
    if(videoFormats?.length === 0 || !videoFormats) return null

    return (
        <List.Section style={styles.downloadView}>
            <Button title='Download' onPress={downloadVideo} width={170} />
            <List.Accordion
                title={label || 'Select format'}
                style={styles.formatView}
                expanded={expanded}
                onPress={handleAccordion}
            >
                {
                    videoFormats.flatMap((videoFormat, index) => {
                        const { qualityLabel, container, } = videoFormat;
                        return (
                            <List.AccordionGroup key={index}>
                                <List.Item
                                    title={`${container} ${qualityLabel}`}
                                    onPress={() => {
                                        selectVideoFormat(`${container} ${qualityLabel}`, index)
                                        setExpanded(false)
                                    }}
                                />
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
})