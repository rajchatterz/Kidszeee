import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const TouchComponent = ({navigation,correct,opt1,opt2,image,sourceScreen}) => {
  return (
    <TouchableOpacity style={styles.lottieBtn} onPress={() => navigation.navigate('quizScreen', { correct: correct, opt1: opt1, opt2: opt2, image: image,sourceScreen:sourceScreen })}>
    <LottieView style={styles.lottieImg} loop autoPlay source={image} />
</TouchableOpacity>
  )
}

export default TouchComponent

const styles = StyleSheet.create({
    lottieImg: {
        width: 110,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    lottieBtn: {
        borderRadius: 10,
        overflow:'hidden'
    },
})