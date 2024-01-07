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
                    <TouchComponent navigation={navigation} correct={'Dog'} opt1={'Monkey'} opt2={'Cat'} image={require('../assets/dog.json')} />
                    <TouchComponent navigation={navigation} correct={'Seahorse'} opt1={'Dog'} opt2={'Donkey'} image={require('../assets/seahorse.json')} />
                    <TouchComponent navigation={navigation} correct={'Rabbit'} opt1={'Hamster'} opt2={'Cat'} image={require('../assets/rabbit.json')} />
                    <TouchComponent navigation={navigation} correct={'Whale'} opt1={'Dolphin'} opt2={'Fish'} image={require('../assets/whale.json')} />
                    <TouchComponent navigation={navigation} correct={'Spider'} opt1={'Dog'} opt2={'Bird'} image={require('../assets/spider.json')} />
                    <TouchComponent navigation={navigation} correct={'Starfish'} opt1={'Dolphin'} opt2={'Shark'} image={require('../assets/starfish.json')} />
                    <TouchComponent navigation={navigation} correct={'Elephant'} opt1={'Zeebra'} opt2={'Lion'} image={require('../assets/elephant.json')} />
                    <TouchComponent navigation={navigation} correct={'Dolphin'} opt1={'Shark'} opt2={'penguine'} image={require('../assets/dolphin.json')} />
                    <TouchComponent navigation={navigation} correct={'Lion'} opt1={'Dog'} opt2={'Cat'} image={require('../assets/lion.json')} />
                    <TouchComponent navigation={navigation} correct={'bees'} opt1={'Bear'} opt2={'Pig'} image={require('../assets/bees.json')} />
                    <TouchComponent navigation={navigation} correct={'Pearl'} opt1={'Goat'} opt2={'Diamond'} image={require('../assets/pearl.json')} />
                    <TouchComponent navigation={navigation} correct={'Horse'} opt1={'donkey'} opt2={'Wood'} image={require('../assets/horse.json')} />
                    <TouchComponent navigation={navigation} correct={'Cat'} opt1={'Squirrel'} opt2={'Cheetah'} image={require('../assets/cat.json')} />

                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/cat.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/duck.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/prawn.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/panda.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/crow.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/frogs.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/penguin.json')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/snake.json')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/fish.json')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/crab.json')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/crab.json')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/crab.json')}/>
                </TouchableOpacity>
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