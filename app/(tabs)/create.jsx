import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";

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
        <View className="justify-center items-center bg-[#1E1E2D] h-[120px] rounded-2xl mb-6">
          <View className="border-dotted border-2 border-secondary-100 p-2 rounded-xl">
            <Image source={icons.upload} className="w-7 h-7 " />
          </View>
        </View>
        <Text className="text-[#CDCDE0] capitalize text-[16px] pb-1">
          ThumbNail Image
        </Text>
        <View className="bg-[#1E1E2D] h-[80px] rounded-2xl mb-6 flex-row items-center justify-center ">
          <Image source={icons.upload} className="w-6 h-6" />
          <Text className="text-[#CDCDE0] text-[16px] pb-1 text-sm ml-1 mt-2 font-pbold">
            Choose a file
          </Text>
        </View>
        <Input label="AI Prompt" placeholder="The AI prompt of your video..." />
        <TouchableOpacity className="w-full bg-secondary p-4 rounded-xl">
          <CustomButton
            title="Submit & Publish"
            textStyles="text-center font-semibold"
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({});
