import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AnimalComponent from '../component/AnimalComponent'


const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('Animal')}>
        <Text>heyt </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Animal')}>
        <Text>heyt </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Animal')}>
        <Text>heyt </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Animal')}>
        <Text>heyt </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Animal')}>
        <Text>heyt </Text>
      </TouchableOpacity>
      <StatusBar barStyle={"dark-content"} backgroundColor={'#f2e9fc'}/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2e9fc'
  }
})