import { View, Text,BackHandler,ToastAndroid } from 'react-native'
import React,{useEffect,useRef} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import SplashScreen1 from '../screens/SplashScreen1'
import SplashScreen2 from '../screens/SplashScreen2'

import AnimalComponent from '../component/AnimalComponent'
import QuizScreen from '../screens/QuizScreen'
import FoodTouch from '../component/FoodTouch'
import FoodScreen from '../screens/FoodScreen'
const Stack = createNativeStackNavigator()
const Index = () => {

  return (
        <NavigationContainer>
      <Stack.Navigator screenOptions={{animation:'fade_from_bottom'}}>
        <Stack.Screen name='s1' options={{ headerShown: false,animation:'fade_from_bottom' }} component={SplashScreen1} />
        <Stack.Screen name='s2' options={{headerShown:false , animation:'fade_from_bottom'}} component={SplashScreen2}/>
        <Stack.Screen  name='Home' options={{headerShown:false , animation:'fade_from_bottom'}} component={HomeScreen} />
        <Stack.Screen name='Animal' options={{ headerShown: false }} component={AnimalComponent} />
        <Stack.Screen name='quizScreen' options={{ headerShown: false }} component={QuizScreen} />
        <Stack.Screen name='Food' options={{ headerShown: false }} component={FoodScreen}/>
        
          </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Index