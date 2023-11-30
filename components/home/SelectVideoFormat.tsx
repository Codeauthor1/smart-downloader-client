import { StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { List } from 'react-native-paper';
import Button from '@component/Button';
import { videoFormat } from 'ytdl-core';

interface SelectVideoFormatProps {
    format: videoFormat[],
    selectVideoFormat: (label: string, uri: string) => void;
     label: string;
}

const SelectVideoFormat: React.FunctionComponent<SelectVideoFormatProps> = ({ format, selectVideoFormat, label }) => {
    console.log('format: ', format);
     const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section style={styles.downloadView}>
            <Button title='Download' onPress={() => alert()} width={170} />
            <List.Accordion title={ label || 'Select format'} style={styles.formatView} >
                {
                    format.flatMap(({ qualityLabel, hasAudio, hasVideo, container, url }, index) => {
                        return <List.Item key={index} title={`${container} ${qualityLabel}`} onPress={() => selectVideoFormat(`${container} ${qualityLabel}`, url)} />
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
    }
})