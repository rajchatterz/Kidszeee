import { StyleSheet, FlatList,View, TouchableOpacity, SafeAreaView, ScrollView, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import TouchComponent from '../component/TouchComponent'

const FlagScreen = ({navigation}) => {

    return (
      <>
          <View style={{backgroundColor:'#f2e9fc'}}>
            <Text style={{fontSize:25,fontWeight:'900',left:30,marginTop:10,marginBottom:10}}>Flag</Text>
          </View>
      <ScrollView >
            <View style={styles.container}>
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Popcorn'} opt1={'Hotdog'} opt2={'Pizza'} image={require('../assets/india.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Hotdog'} opt1={'Apple'} opt2={'Oranges'} image={require('../assets/brazil.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Noodles'} opt1={'Cake'} opt2={'Banana'} image={require('../assets/argentina.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Ice Cream'} opt1={'Dolphin'} opt2={'Fish'} image={require('../assets/swizerland.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Cake'} opt1={'Noodles'} opt2={'Pizza'} image={require('../assets/russia.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Pizza'} opt1={'Apple'} opt2={'Shark'} image={require('../assets/chaina.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'French fries'} opt1={'Apple'} opt2={'Oranges'} image={require('../assets/ukraine.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Candy'} opt1={'Cake'} opt2={'Pizza'} image={require('../assets/turkey.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Berger'} opt1={'Cake'} opt2={'Hotdog'} image={require('../assets/france.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Pizza'} opt1={'Apple'} opt2={'Pig'} image={require('../assets/uk.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Apple'} opt1={'Corn'} opt2={'Pineapple'} image={require('../assets/usa.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Corn'} opt1={'Cake'} opt2={'Fish'} image={require('../assets/uae.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Pine'} opt1={'Ice Cream'} opt2={'Banana'} image={require('../assets/canada.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Watermelon'} opt1={'Pineapple'} opt2={'Cake'} image={require('../assets/afganistan.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Straw'} opt1={'Hotdog'} opt2={'Noodles'} image={require('../assets/bangladesh.json')} />

                    
            </View>
            </ScrollView>
            </>
  )
}

export default FlagScreen

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