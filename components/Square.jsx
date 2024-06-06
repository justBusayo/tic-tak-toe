// Square.js
import React from "react";
import tw from "twrnc";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const Square = ({ value, onPress, playerImage, computerImage, style }) => {
  return (
    <TouchableOpacity
      style={[
        tw`w-[109px] h-[149px] flex flex-row items-center justify-center border-white`,
        style,
      ]}
      onPress={onPress}
    >
      {value === "X" && <Image source={playerImage} style={tw`w-[109px] h-[149px] rounded-full`} />}
      {value === "O" && <Image source={computerImage} style={tw`w-[109px] h-[149px] rounded-full`} />}
    </TouchableOpacity>
  );
};


export default Square;
