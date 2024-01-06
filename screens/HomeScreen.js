import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AnimalComponent from '../component/AnimalComponent'


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('quizhome')}>
        <AnimalComponent/>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})