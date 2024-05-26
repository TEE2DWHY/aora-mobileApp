import { Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({ label, placeholder, value, type }) => {
  return (
    <View className="flex gap-1 mb-6">
      <Text className="text-[#CDCDE0] capitalize text-[16px] pb-1">
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        className="p-4 bg-[#1E1E2D] rounded-xl text-white font-pbold"
        secureTextEntry={type === "password"}
        placeholderTextColor="#7B7B8B"
      />
    </View>
  );
};

export default Input;
