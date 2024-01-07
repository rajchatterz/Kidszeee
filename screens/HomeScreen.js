import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import AnimalComponent from '../component/AnimalComponent'
import HomeTouch from '../component/HomeTouch'
import FoodTouch from '../component/FoodTouch'
import FlagTouch from '../component/FlagComponent'
import Animated, { FadeInLeft } from 'react-native-reanimated'
const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textView}>Available Challenges</Text>
      <View style={styles.middle}>
        <Animated.View entering={FadeInLeft.delay(200).duration(2000).springify()}>
        <HomeTouch navigation={navigation} />
        </Animated.View>
        <Animated.View entering={FadeInLeft.delay(400).duration(2000).springify()}>
        <FoodTouch navigation={ navigation}/>
          
        </Animated.View>
        <Animated.View entering={FadeInLeft.delay(600).duration(2000).springify()}>
        <FlagTouch navigation={navigation}/>
          
        </Animated.View>
        <Animated.View entering={FadeInLeft.delay(800).duration(2000).springify()}>
        <FlagTouch navigation={navigation}/>
          
        </Animated.View>
        <Animated.View entering={FadeInLeft.delay(1000).duration(2000).springify()}>
        <FlagTouch navigation={navigation}/>
          
        </Animated.View>
        <Animated.View entering={FadeInLeft.delay(1200).duration(2000).springify()}>

        <FlagTouch navigation={navigation}/>
        </Animated.View>
      </View>
      <StatusBar barStyle={"dark-content"} backgroundColor={'#f2e9fc'}/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2e9fc'
  },
  textView: {
    color: 'black',
    textAlign: 'center',
    fontWeight:'800',
    fontSize: 23,
    marginTop: 10,
    marginBottom:20
  },
  middle: {
    gap:40
  }

})