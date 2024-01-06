import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const SplashScreen1 = () => {
  return (
      <View style={styles.container}>
      <LottieView style={{ width: 300, height: 500 }} autoPlay loop source={require('../assets/initialAni.json')} />
      <StatusBar barStyle={"dark-content"} backgroundColor={'#ead9fd'} />
    </View>
  )
}

export default SplashScreen1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ead9fd'
  }
})