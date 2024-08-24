import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import { handleChange } from "../../utils/handleChange";
import { Video, ResizeMode } from "expo-av";
import * as DocumentPicker from "expo-document-picker"; // allows us to access from files
import * as ImagePicker from "expo-image-picker"; // allows us to access from gallery
import Input from "../../components/Input";
const Create = () => {
  const [form, setForm] = useState({
    title: "",
    video: "",
    thumbnail: "",
    prompt: "",
  });

  const openPicker = async (selectType) => {
    // const result = await DocumentPicker.getDocumentAsync({
    //   // allows us to access from files
    //   type:
    //     selectType === "image"
    //       ? ["image/png", "image/jpg", "/images/jpeg"]
    //       : ["video/mp4", "video/gif"],
    // });
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:
        selectType === "image"
          ? ImagePicker.MediaTypeOptions.Images
          : ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      if (selectType === "image") {
        setForm({ ...form, thumbnail: result.assets[0] });
      }
      if (selectType === "video") {
        setForm({ ...form, video: result.assets[0] });
      }
    } else {
      setTimeout(() => {
        Alert.alert("Document Picked", JSON.stringify(result, null, 2));
      }, 100);
    }
  };

  const submit = async () => {
    if (!form.prompt || !form.thumbnail || !form.title || !form.video) {
      return Alert.alert("Please fill in all the fields");
    } else {
      Alert.alert(`Creating videos with title:  ${form.title}`);
    }
    console.log(form);
    // try {
    //   const formData = new FormData();
    //   formData.append("title", form.title);
    //   formData.append("prompt", form.prompt);
    //   formData.append("thumbnail", {
    //     uri: form.thumbnail.uri,
    //     type: form.thumbnail.mimeType,
    //     name: form.thumbnail.name,
    //     size: form.thumbnail.size,
    //   });
    //   formData.append("video", {
    //     uri: form.video.uri,
    //     type: form.video.mimeType,
    //     name: form.video.name,
    //     size: form.video.size,
    //   });

    //   const response = await axios.post(
    //     "http://your-backend-url/api/upload",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );

    //   console.log("Upload successful:", response.data);
    //   Alert.alert("Upload successful");
    //   console.log("Upload successful:", response.data);
    //   Alert.alert("Upload successful");
    // } catch (error) {
    //   console.error("Error uploading:", error);
    //   Alert.alert("Upload failed");
    // }
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
          onChange={(value) => handleChange(form, setForm, "title", value)}
        />
        <Text className="text-[#CDCDE0] capitalize text-[16px] pb-1">
          Upload Video
        </Text>
        <TouchableOpacity
          className="justify-center items-center bg-[#1E1E2D] h-[190px] rounded-2xl mb-6"
          onPress={() => openPicker("video")}
        >
          {form.video ? (
            <Video
              source={{ uri: form.video.uri }}
              useNativeControls
              isLooping
              className="rounded-2xl w-full h-full bg-center"
              resizeMode={ResizeMode.COVER}
            />
          ) : (
            <View className="border-dotted border-2 border-secondary-100 py-4 px-2 rounded-xl">
              <Image source={icons.upload} className="w-7 h-7" />
            </View>
          )}
        </TouchableOpacity>
        <Text className="text-[#CDCDE0] capitalize text-[16px] pb-1">
          ThumbNail Image
        </Text>
        <TouchableOpacity
          className="bg-[#1E1E2D] h-[130px] rounded-2xl mb-6 flex-row items-center justify-center "
          onPress={() => openPicker("image")}
        >
          {form.thumbnail ? (
            <Image
              source={form.thumbnail}
              resizeMode="cover"
              className="w-full h-full rounded-2xl"
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
