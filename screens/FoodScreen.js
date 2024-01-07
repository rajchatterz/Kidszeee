import { StyleSheet, FlatList,View, TouchableOpacity, SafeAreaView, ScrollView, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import TouchComponent from '../component/TouchComponent'

const FoodScreen = ({navigation}) => {

    return (
      <>
          <View style={{backgroundColor:'#f2e9fc'}}>
            <Text style={{fontSize:25,fontWeight:'900',left:30,marginTop:10,marginBottom:10}}>Food</Text>
          </View>
      <ScrollView >
            <View style={styles.container}>
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Popcorn'} opt1={'Hotdog'} opt2={'Pizza'} image={require('../assets/popcorn.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Hotdog'} opt1={'Apple'} opt2={'Oranges'} image={require('../assets/hotdog.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Noodles'} opt1={'Cake'} opt2={'Banana'} image={require('../assets/noodles.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Ice Cream'} opt1={'Dolphin'} opt2={'Fish'} image={require('../assets/ice.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Cake'} opt1={'Noodles'} opt2={'Pizza'} image={require('../assets/cake.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Pizza'} opt1={'Apple'} opt2={'Shark'} image={require('../assets/pizza.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'French fries'} opt1={'Apple'} opt2={'Oranges'} image={require('../assets/french.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Candy'} opt1={'Cake'} opt2={'Pizza'} image={require('../assets/candy.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Berger'} opt1={'Cake'} opt2={'Hotdog'} image={require('../assets/berger.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Pizza'} opt1={'Apple'} opt2={'Pig'} image={require('../assets/pizza.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Apple'} opt1={'Corn'} opt2={'Pineapple'} image={require('../assets/apple.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Corn'} opt1={'Cake'} opt2={'Fish'} image={require('../assets/corn.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Pine'} opt1={'Ice Cream'} opt2={'Banana'} image={require('../assets/pine.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Watermelon'} opt1={'Pineapple'} opt2={'Cake'} image={require('../assets/water.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Straw'} opt1={'Hotdog'} opt2={'Noodles'} image={require('../assets/straw.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Banana'} opt1={'Bear'} opt2={'Pig'} image={require('../assets/banana.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Banana'} opt1={'Bear'} opt2={'Pig'} image={require('../assets/banana.json')} />
                    <TouchComponent sourceScreen="Food" navigation={navigation} correct={'Banana'} opt1={'Pineapple'} opt2={'Pizza'} image={require('../assets/banana.json')} />
                    
            </View>
            </ScrollView>
            </>
  )
}

export default FoodScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2e9fc',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        
    },
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
    flatListContainer: {
        alignItems: 'center',
        paddingTop: 20,
      },
})