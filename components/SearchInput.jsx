import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "../constants";

const SearchInput = ({ placeholder, value, type, onChange, keyboardType }) => {
  return (
    <View className="border-2 border-black-200 w-full h-16 my-4 px-4 bg-black-100 rounded-xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        placeholder={placeholder}
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        placeholderTextColor="#7B7B8B"
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
      />
      <View>
        <TouchableOpacity
        // onPress={() => setShowPassword(!showPassword)}
        >
          <Image source={icons.search} className="w-5 h-5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
