import React from "react";
import tw from "twrnc";
import { StyleSheet, TouchableOpacity } from "react-native";

const TouchableImage = () => {
  return (
    <TouchableOpacity
      style={[tw`w-[109px] h-[149px] bg-white flex flex-row items-center justify-center border border-[#F4AB3E] `, styles.borderRadi]}
    >

    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    borderRadi: {
        borderRadius: 20
    }
})
export default TouchableImage;
