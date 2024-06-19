import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";
import { images } from "../../constants";
import Video from "../../components/Video";

const Bookmark = () => {
  return (
    <>
      <SafeAreaView className="h-full bg-primary px-6">
        <FlatList
          ListHeaderComponent={() => (
            <View>
              <Text className="text-white text-2xl font-psemibold mt-12">
                Saved Videos
              </Text>
              <View className="flex-row items-center justify-between rounded-xl border-2 border-black-100 focus:border-secondary-100 my-4 px-4 bg-black-100 w-full h-16">
                <TextInput
                  placeholder="Search your saved videos"
                  placeholderTextColor="white"
                  className="text-[#CDCDE0] text-base"
                />
                <Image
                  source={icons.search}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
              </View>
              <Video
                avatar={images.johnson}
                header={
                  "The camera follows behind a white vintage SUV with a black roof rack as it speeds up a steep dirt road surrounded by pine trees on a steep mountain slope, "
                }
                subHeader={"johnson"}
                dropdown={icons.menu}
                content={images.camera}
              />
              <Video
                avatar={images.johnson}
                header={"Close up on cartoon character boy on social media, "}
                subHeader={"johnson"}
                dropdown={icons.menu}
                content={images.cartoon}
              />
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default Bookmark;

const styles = StyleSheet.create({});
