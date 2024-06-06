import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import backgroundImage from "../../assets/bg-app.png";
import AnimatedBomb from "../../assets/animated_bumb.png";
import AnimatedNinja from "../../assets/animated_ninja.png";

const SideSelection = () => {
  const navigation = useNavigation();

  const selectCharacter = (character) => {
    navigation.navigate("GameScreen", { playerChar: character });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.view}>
          <View
            style={[
              tw`w-[182px] h-[61px] bg-[#08A8FF] flex flex-row items-center justify-center`,
              styles.borderRadi,
            ]}
          >
            <Text
              style={tw`text-white leading-[29.05px] text-[24px] font-bold rounded-xl`}
            >
              Tic Tac Toe
            </Text>
          </View>

          <View
            style={[
              tw`w-[312px] h-[64px] bg-white border border-[#08A8FF] flex flex-row items-center justify-center mt-10`,
              { borderRadius: 10 },
            ]}
          >
            <Text
              style={tw`text-[#08A8FF] leading-[29.05px] text-[35px] font-bold pt-2`}
            >
              Select your side
            </Text>
          </View>

          <View style={tw`my-10 flex flex-row `}>
            <TouchableOpacity
              style={tw`flex flex-col gap-5 items-center justify-center`}
              onPress={() => selectCharacter("X")}
            >
              <Image
                source={AnimatedNinja}
                style={tw`w-[163px] h-[223px] rounded-full border border-gray-700`}
              />
              <View
                style={[
                  tw`w-[148px] h-[44px] bg-white border border-[#F4AB3E] flex flex-row items-center justify-center`,
                  { borderRadius: 10 },
                ]}
              >
                <Text
                  style={tw`text-[#F4AB3E] leading-[35.18px] text-[29px] font-bold rounded-xl`}
                >
                  Skull "X"
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`flex flex-col gap-5 items-center justify-center`}
              onPress={() => selectCharacter("O")}
            >
              <Image
                source={AnimatedBomb}
                style={tw`w-[163px] h-[223px] rounded-full border border-gray-700`}
              />

              <View
                style={[
                  tw`w-[148px] h-[44px] bg-white border border-[#4AFB5F] flex flex-row items-center justify-center`,
                  { borderRadius: 10 },
                ]}
              >
                <Text
                  style={tw`text-[#4AFB5F] leading-[35.18px] text-[29px] font-bold rounded-xl`}
                >
                  Skull "O"
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  borderRadi: {
    borderRadius: 20,
  },
});

export default SideSelection;
