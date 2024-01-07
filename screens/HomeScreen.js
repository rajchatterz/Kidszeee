import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import AnimalComponent from '../component/AnimalComponent'
import HomeTouch from '../component/HomeTouch'
import FoodTouch from '../component/FoodTouch'


const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textView}>Available Challenges</Text>
      <HomeTouch navigation={navigation} />
      <FoodTouch navigation={ navigation} />
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
    fontSize:23
  }

})