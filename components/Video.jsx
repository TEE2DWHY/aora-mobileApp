import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Video = ({ avatar, header, subHeader, dropdown, content }) => {
  return (
    <ScrollView className="w-full mt-5">
      <View className="flex flex-row items-center justify-between mt-2 mb-0">
        <Image source={avatar} className="w-12 h-12 mr-2" />
        <View className="flex-1">
          <Text
            className="text-white font-semibold"
            numberOfLines={1} //This ensures that the header text stays in a single line and displays ellipses if it is too long to fit within the available space. The rest of your layout and styling remain the same.
            ellipsizeMode="tail"
          >
            {header}
          </Text>
          <Text className="text-gray-500">{subHeader}</Text>
        </View>
        <Image
          source={dropdown}
          resizeMode="contain"
          className="h-[20px] w-[20px] ml-8"
        />
      </View>
      <Image source={content} className="w-full h-64" resizeMode="contain" />
    </ScrollView>
  );
};

export default Video;
