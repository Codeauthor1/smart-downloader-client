import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const Post: React.FunctionComponent = () => {
    return (
        <Card style={styles.cardView}>
            <Card.Cover style={{height: 300, width: 200,}}  resizeMode='center' source={{ uri:   'https://picsum.photos/700' }} defaultSource={ require('../assets/images/default_image.jpg')}/>
        </Card>
    )
}

const CurratedPost = () => {
  return (
   <ScrollView centerContent horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        <Post />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    scrollView: {
        height: 300,
        width: "100%",
    },
    cardView: {
        width: 200,
    }
})

export default CurratedPost