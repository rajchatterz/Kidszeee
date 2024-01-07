import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const QuizScreen = ({ route,navigation }) => {
  const { correct,opt1,opt2, image,sourceScreen } = route.params;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [errormessage,setErrormessage] = useState(false)
  const [showModal,setShowModal]= useState(false)
  const handleSelection = (text) => {
    setSelectedAnswer(text);
    // Check if the selected answer is correct (i.e., 'Dog')
    if (text === correct) {
      // Handle correct answer
      console.log('Correct answer selected');
      setShowModal(true)
      setErrormessage(false)
      setTimeout(() => {
        setShowModal(false);
        // Conditional navigation based on the source screen
        if (sourceScreen === 'Animal') {
          navigation.navigate('Animal'); // Navigate to 'Animal' screen
        } else  {
          navigation.navigate('Food'); // Navigate back to 'Food' screen
        }
      }, 3000);

      // You might navigate to the next question or perform any other action
    } else {
      // Handle incorrect answer
      console.log('Incorrect answer selected');
      setErrormessage(true)
      // You might show an alert or provide feedback to the user
    }
  };

  const getButtonStyle = (text) => {
    // Apply different styles to the buttons based on the selected answer
    if (selectedAnswer === text && text === correct) {
      return [styles.button, styles.correctAnswer]; // Style for the correct answer
    } else if (selectedAnswer === text) {
      return [styles.button, styles.wrongAnswer]; // Style for incorrect answers
    }
    return styles.button; // Default style for unselected buttons
  };

  return (
    <View style={styles.container}>
      <LottieView source={image} style={styles.lottieImg} autoPlay loop />
      <View style={styles.errormessage}>
          {errormessage?<Text style={{fontSize:24,fontWeight:'900'}}>Wrong Ans</Text>:null}
        </View>
      <View style={styles.touchBtn}>
        <TouchableOpacity style={getButtonStyle(opt1)} onPress={() => handleSelection(opt1)}>
          <Text style={styles.insideBtn}>{opt1}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={getButtonStyle(correct)} onPress={() => handleSelection(correct)}>
          <Text style={styles.insideBtn}>{correct}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={getButtonStyle(opt2)} onPress={() => handleSelection(opt2)}>
          <Text style={styles.insideBtn}>{opt2}</Text>
        </TouchableOpacity>
        
      </View>
      <Modal transparent  visible={showModal} onRequestClose={()=>setShowModal(false)}>
        <Animated.View style={styles.modal} entering={FadeInUp.delay(50).duration(2000).springify()}>
          <LottieView style={styles.lottieImg} autoPlay loop source={require('../assets/congratulation.json')} />
          <LottieView style={styles.lottieImg} autoPlay loop source={require('../assets/batch.json')} />
          
        </Animated.View>
      </Modal>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2e9fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    // Android shadow
    elevation: 10,
    // iOS shadow
    shadowColor: '#1e1818',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: '#8cb9f0', // Background color for the button
    borderColor: '#ccc',

    
  },
  correctAnswer: {
    backgroundColor: '#8bff4d', // Example: Green background for correct answer
    borderColor: '#6bfa6b',
  },
  wrongAnswer: {
    backgroundColor: '#fb5e3a', // Example: Red background for incorrect answer
    borderColor: 'red',
  },
  lottieImg: {
    width: 280,
    height: 230,

    borderRadius: 10,
    alignItems:'center'
  },
  errormessage: {
    height: 30,
    
  },

 
  insideBtn: {
    width: 200,
    textAlign: 'center',
    color: 'black',
    fontWeight: '900',
    fontSize:22
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:-100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  }
});
