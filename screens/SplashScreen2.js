import { StyleSheet,StatusBar, Text, TouchableOpacity, View,BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import Animated, { FadeInUp,F } from 'react-native-reanimated'
import { useIsFocused } from '@react-navigation/native'
const SplashScreen2 = ({ navigation }) => {
    const isFocused = useIsFocused()
    useEffect(() => {
        const backAction = () => {
            if (isFocused) {
                BackHandler.exitApp()
                return true
            }
           return false
        }
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
        
        return ()=>backHandler.remove()
    },[isFocused,navigation])
  return (
    <Animated.View entering={FadeInUp.delay(300).duration(4000).springify()} style={styles.container}>
          <LottieView source={require('../assets/initialAni22.json')} style={styles.lottieImg} loop autoPlay />
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
              <LottieView source={require('../assets/welBtnAni.json')} style={styles.lottieBtn}  loop autoPlay/>
          </TouchableOpacity>
          <StatusBar barStyle={"dark-content"} backgroundColor={'#f2e9fc'} />
    </Animated.View>
  )
}

export default SplashScreen2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2e9fc',
        alignItems: 'center',
        justifyContent:'center'
    },
    lottieImg: {
        width: 200, height: 200,resizeMode:'cover'

    },
    lottieBtn: {
        width: 300, height: 300,
        top:-70
    }
})