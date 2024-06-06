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
const HomeScreen = () => {
  const navigation = useNavigation();

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

          <View style={tw`my-6  `}>
            <View style={tw`flex flex-row gap-5 border-b-4 border-white`}>
              {[1, 2, 3].map((chtr) => (
                <View
                  style={tw`${
                    chtr === 2 && "border-l-4 border-r-4 border-white p-2"
                  }`}
                >
                  <View>
                    <Image
                      source={AnimatedBomb}
                      style={tw`w-[109px] h-[149px] rounded-full border border-gray-700`}
                    />
                  </View>
                  {/* <TouchableImage /> */}
                </View>
              ))}
            </View>

            <View style={tw`flex flex-row gap-5 border-b-4 border-white`}>
              {[1, 2, 3].map((chtr) => (
                <View
                  style={tw`${
                    chtr === 2 && "border-l-4 border-r-4 border-white p-2"
                  }`}
                >
                  <View>
                    <Image
                      source={AnimatedNinja}
                      style={tw`w-[109px] h-[149px] rounded-full border border-gray-700`}
                    />
                  </View>
                  {/* <TouchableImage /> */}
                </View>
              ))}
            </View>

            <View style={tw`flex flex-row gap-5`}>
              {[1, 2, 3].map((chtr) => (
                <View
                  style={tw`${
                    chtr === 2 && "border-l-4 border-r-4 border-white p-2"
                  }`}
                >
                  <View>
                    <Image
                      source={AnimatedNinja}
                      style={tw`w-[109px] h-[149px] rounded-full border border-gray-700`}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("SideSelection")}
            style={[
              tw`w-[182px] h-[61px] bg-[#08A8FF] flex flex-row items-center justify-center`,
              styles.borderRadi,
            ]}
          >
            <Text
              style={tw`text-white leading-[29.05px] text-[24px] font-bold rounded-xl`}
            >
              Start
            </Text>
          </TouchableOpacity>
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

export default HomeScreen;
