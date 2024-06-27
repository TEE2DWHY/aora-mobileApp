import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({ placeholder, initialState }) => {
  const pathName = usePathname();
  const [query, setQuery] = useState(initialState || "");
  return (
    <View className="border-2 border-black-200 w-full h-16 my-4 px-4 bg-black-100 rounded-xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        placeholder={placeholder}
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        placeholderTextColor="#cdcde0"
        value={query}
        onChangeText={(e) => setQuery(e)}
      />
      <View>
        <TouchableOpacity
          onPress={() => {
            if (!query) {
              return Alert.alert(
                "Missing Query",
                "Please input data to search results across database"
              );
            }
            if (pathName.startsWith("/search")) router.setParams({ query });
            else router.push(`/search/${query}`);
          }}
          // onPress={() => setShowPassword(!showPassword)}
        >
          <Image source={icons.search} className="w-5 h-5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
