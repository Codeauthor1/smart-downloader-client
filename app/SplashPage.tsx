import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SplashPage: React.FunctionComponent = () => {
  return (
      <View style={{ ...styles.splashView, backgroundColor: '#f93961'}}>
          <MaterialCommunityIcons name="progress-download" size={100} color='#ffffff' />
          <View>
            <Text style={{ ...styles.text, ...styles.rightAlignText}}>Smart</Text>
            <Text style={styles.text}>Downloader</Text>
         </View>
    </View>
  )
}



export default SplashPage;

const styles = StyleSheet.create({
    splashView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        fontSize: 34
    },
    rightAlignText: {
        textAlign: 'right'
    }
})