import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const HomeTouch = ({ navigation }) => {
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('Animal')}>
      <View style={styles.imgView}>
        <View style={styles.lottieImgContainer}>
          <LottieView style={styles.lottieImg} source={require('../assets/dog.json')} />
        </View>
        <View style={styles.lottieImgContainer}>
          <LottieView style={styles.lottieImg} source={require('../assets/snake.json')} />
        </View>
        <View style={styles.lottieImgContainer}>
          <LottieView style={styles.lottieImg} source={require('../assets/rabbit.json')} />
        </View>
        <View style={styles.lottieImgContainer}>
          <LottieView style={styles.lottieImg} source={require('../assets/crab.json')} />
        </View>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.text}>Animal</Text>
        <Text style={styles.playBtn}>Play</Text>
      </View>
    </Pressable>
  )
}

export default HomeTouch

const styles = StyleSheet.create({
  lottieImgContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    marginHorizontal: 6,
    borderRadius: 10,
    overflow: 'hidden',
  },
  lottieImg: {
    width: '100%',
    height: '100%',
  },
  imgView: {
    flexDirection: 'row',
  },
  container: {
    marginHorizontal: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    padding: 10,
    borderRadius:14
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
    alignItems:'center'
   
  },
  playBtn: {
    fontSize: 20,
    backgroundColor: '#8ffa64',
    fontWeight: '800',
    color: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 5,
    borderRadius:5
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    
  }
})
