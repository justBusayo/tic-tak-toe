// CustomDrawerContent.js
import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import tw from "twrnc";
const SideDrawer = () => {
  return (
    <SafeAreaView>
      <View style={tw`h-full bg-[#1C1C1D] pt-5 pb-5 px-2`}></View>
    </SafeAreaView>
  );
};

export default SideDrawer;
