import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import { handleChange } from "../../utils/handleChange";
import { Video, ResizeMode } from "expo-av";
import * as DocumentPicker from "expo-document-picker";
import Input from "../../components/Input";
const Create = () => {
  const [form, setForm] = useState({
    title: "",
    video: "",
    thumbnail: "",
    prompt: "",
  });

  const openPicker = async (selectType) => {
    const result = await DocumentPicker.getDocumentAsync({
      type:
        selectType === "image"
          ? ["image/png", "image/jpg"]
          : ["video/mp4", "video/gif"],
    });
    if (!result.canceled) {
      if (selectType === "image") {
        setForm({ ...form, thumbnail: result.assets[0] });
      }
    }
  };

  const submit = () => {
    console.log("creating video....");
  };
  return (
    <SafeAreaView className="h-full w-full bg-primary px-4">
      <ScrollView
        className="flex mt-12"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text className="font-pbold text-2xl text-white mb-6">
          Upload Video
        </Text>
        <Input
          label="Video Title"
          placeholder="Give your video a catchy title..."
          value={form.title}
          onChangeText={(value) => handleChange(form, setForm, "title", value)}
        />
        <Text className="text-[#CDCDE0] capitalize text-[16px] pb-1">
          Upload Video
        </Text>
        <TouchableOpacity
          className="justify-center items-center bg-[#1E1E2D] h-[120px] rounded-2xl mb-6"
          onPress={() => openPicker("video")}
        >
          {form.video ? (
            <Video
              source={{ uri: form.video.uri }}
              useNativeControls
              isLooping
              className="rounded-2xl w-full h-64"
              resizeMode={ResizeMode.COVER}
            />
          ) : (
            <View className="border-dotted border-2 border-secondary-100 py-4 px-2 rounded-xl">
              <Image source={icons.upload} className="w-7 h-7 " />
            </View>
          )}
        </TouchableOpacity>
        <Text className="text-[#CDCDE0] capitalize text-[16px] pb-1">
          ThumbNail Image
        </Text>
        <TouchableOpacity
          className="bg-[#1E1E2D] h-[80px] rounded-2xl mb-6 flex-row items-center justify-center "
          onPress={() => openPicker("image")}
        >
          {form.thumbnail ? (
            <Image
              source={form.thumbnail}
              resizeMode="cover"
              className="w-full h-64 rounded-2xl "
            />
          ) : (
            <>
              <Image source={icons.upload} className="w-6 h-6" />
              <Text className="text-[#CDCDE0] text-[16px] pb-1 text-sm ml-1 mt-2 font-pbold">
                Choose a file
              </Text>
            </>
          )}
        </TouchableOpacity>
        <Input
          label="AI Prompt"
          placeholder="The AI prompt of your video..."
          value={form.prompt}
          onChange={(value) => handleChange(form, setForm, "prompt", value)}
        />
        <TouchableOpacity className="w-full bg-secondary p-4 rounded-xl">
          <CustomButton
            title="Submit & Publish"
            textStyles="text-center font-semibold"
            handlePress={submit}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
