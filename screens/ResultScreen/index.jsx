// ResultScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../assets/bg-app.png";
import WinImg from "../../assets/won.png";
import LoseImg from "../../assets/lose.png";
import DrawImg from "../../assets/draw.png";

const ResultScreen = ({ route }) => {
  const { winner, playerChar } = route.params;
  const navigation = useNavigation();

  const restartGame = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "GameScreen", params: { playerChar } }],
    });
  };

  const endGame = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeScreen" }],
    });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={[tw`flex flex-col gap-10`, styles.container]}>
        {winner === "Draw" && (
          <Image
            source={DrawImg}
            style={tw`w-[163px] h-[223px] rounded-full border border-gray-700`}
          />
        )}
        {winner === playerChar && (
          <Image
            source={WinImg}
            style={tw`w-[163px] h-[163px] rounded-full border border-gray-700`}
          />
        )}
        {winner !== playerChar && winner !== "Draw" && (
          <Image
            source={LoseImg}
            style={tw`w-[163px] h-[223px] rounded-full border border-gray-700`}
          />
        )}

        <View
          style={[
            tw`w-[216px] h-[43px] bg-white py-1 px-[29px] flex flex-row items-center justify-center`,
            { borderRadius: 10 },
          ]}
        >
          <Text
            style={tw`text-[#000000] text-[29px] leading-[35.18px] font-bold `}
          >
            {winner === "Draw"
              ? "It's a Draw!"
              : winner === playerChar
              ? `You won!`
              : "You lose!"}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            tw`w-[113px] h-[35px] bg-[#08A8FF] flex flex-row items-center justify-center`,
            { borderRadius: 20 },
          ]}
          onPress={restartGame}
        >
          <Text
            style={tw`text-white leading-[29.05px] text-[24px] font-bold rounded-xl`}
          >
            Restart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={endGame}
          style={tw`border-b-2 border-white`}
        >
          <Text style={tw`text-white text-lg font-semibold`}>End Game</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ResultScreen;
