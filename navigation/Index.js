import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import SplashScreen1 from '../screens/SplashScreen1'
const Stack = createNativeStackNavigator()
const Index = () => {
  return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='s1' options={{ headerShown: false}} component={SplashScreen1}/>
        <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        
          </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Index