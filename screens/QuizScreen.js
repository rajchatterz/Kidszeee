import LottieView from "lottie-react-native";
import { View,Text } from "react-native";
const QuizScreen = ({ route }) => {
  const { copt, image } = route.params;

  return (
    <View>
      <Text>{copt}</Text>
      <LottieView source={image} style={{ width: 200, height: 200 }} autoPlay loop />
    </View>
  );
};
export default QuizScreen