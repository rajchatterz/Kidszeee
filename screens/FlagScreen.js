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
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'India'} opt1={'Argentina'} opt2={'Combodia'} image={require('../assets/india.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Brazil'} opt1={'Usa'} opt2={'Uk'} image={require('../assets/brazil.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Argentina'} opt1={'India'} opt2={'UK'} image={require('../assets/argentina.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Swizerland'} opt1={'Usa'} opt2={'Combodia'} image={require('../assets/swizerland.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Russia'} opt1={'swizerland'} opt2={'UAE'} image={require('../assets/russia.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'China'} opt1={'Uk'} opt2={'Canada'} image={require('../assets/chaina.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Ukraine'} opt1={'Uk'} opt2={'Russia'} image={require('../assets/ukraine.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Turkey'} opt1={'swizerland'} opt2={'UK'} image={require('../assets/turkey.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'France'} opt1={'Turkey'} opt2={'UK'} image={require('../assets/france.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Uk'} opt1={'India'} opt2={'UK'} image={require('../assets/uk.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Usa'} opt1={'swizerland'} opt2={'Combodia'} image={require('../assets/usa.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Uae'} opt1={'Combodia'} opt2={'Argentina'} image={require('../assets/uae.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Canada'} opt1={'South Korea'} opt2={'North Korea'} image={require('../assets/canada.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Afganistan'} opt1={'India'} opt2={'Pakistan'} image={require('../assets/afganistan.json')} />
                    <TouchComponent sourceScreen="Flag" navigation={navigation} correct={'Bangladesh'} opt1={'Sri lanka'} opt2={'India'} image={require('../assets/bangladesh.json')} />

                    
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