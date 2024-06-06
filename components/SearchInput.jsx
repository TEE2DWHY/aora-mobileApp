import { Text, TextInput, View } from "react-native";
import React from "react";

const SearchInput = ({
  label,
  placeholder,
  value,
  type,
  onChange,
  keyboardType,
}) => {
  return (
    <View className="flex gap-1 mb-6">
      <Text className="text-[#CDCDE0] capitalize text-[16px] pb-1">
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        className={`p-4 bg-[#1E1E2D] rounded-xl text-white font-pbold w-full ${
          value ? "border-yellow-500 border-2" : "border-transparent border-0"
        }`}
        secureTextEntry={type === "password"}
        placeholderTextColor="#7B7B8B"
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default SearchInput;
