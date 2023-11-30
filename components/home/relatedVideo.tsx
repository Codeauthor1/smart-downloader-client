import { StyleSheet } from 'react-native'
import React from 'react'
import { View, Text } from '@component/Themed'

const RelatedVideo = () => {
  return (
    <View>
      <Text style={styles.title}>RelatedVideo</Text>
    </View>
  )
}

export default RelatedVideo

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '700',
        paddingLeft: 10
    }
})