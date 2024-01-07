import { StyleSheet, FlatList,View, TouchableOpacity, SafeAreaView, ScrollView, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const AnimalComponent = ({navigation}) => {

    return (
      <>
          <View style={{backgroundColor:'#f2e9fc'}}>
            <Text style={{fontSize:25,fontWeight:'900',left:30,marginTop:10,marginBottom:10}}>Animal</Text>
          </View>
      <ScrollView >
            <View style={styles.container}>
                <TouchableOpacity style={styles.lottieBtn} onPress={()=>navigation.navigate('quizScreen',{copt:'dog',image:require('../assets/dog.json')})}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/dog.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn} onPress={()=>navigation.navigate('quizScreen',{copt:'seahorse',image:require('../assets/seahorse.json')})}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/seahorse.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/rabbit.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/whale.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/turtle.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/spider.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/starfish.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/deer.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/elephant.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/dolphin.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/lion.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/bees.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/pearl.json')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lottieBtn}>
                    <LottieView style={styles.lottieImg} loop autoPlay source={require('../assets/horse.json')} />
                </TouchableOpacity>
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

export default AnimalComponent

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