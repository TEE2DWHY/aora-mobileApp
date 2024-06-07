import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import { icons } from "../../constants";

const Create = () => {
  return (
    <SafeAreaView className="h-full w-full bg-primary px-4">
      <ScrollView className="flex mt-12">
        <Text className="font-pbold text-2xl text-white mb-6">
          Upload Video
        </Text>
        <Input
          label="Video Title"
          placeholder="Give your video a catchy title..."
        />
        <Text className="text-[#CDCDE0] capitalize text-[16px] pb-1">
          Upload Video
        </Text>
        <View className="justify-center items-center bg-[#1E1E2D] h-[150px] rounded-2xl">
          <View className="border-dotted border-2 border-secondary-100 p-2 rounded-xl">
            <Image source={icons.upload} className="w-8 h-8 " />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({});
