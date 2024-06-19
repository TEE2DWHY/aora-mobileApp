import { FlatList, Image, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../constants/images";
import Video from "../../components/Video";
import icons from "../../constants/icons";
import images from "../../constants/images";

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className="px-6">
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="absolute right-9 mt-8 w-6 h-6"
              />
              <View className="flex items-center mt-20 mb-4">
                <Image source={image.avatar} />
                <Text className="text-white font-semibold mt-[10px] text-2xl">
                  jsmastery
                </Text>
                <View className="flex-row mt-[6px]">
                  <View className="flex mt-2">
                    <Text className="text-white flex-col text-2xl font-psemibold mr-14">
                      10
                    </Text>
                    <Text className="text-gray-500">Posts</Text>
                  </View>
                  <View className="flex mt-2">
                    <Text className="text-white flex-col text-2xl font-psemibold">
                      1.2k
                    </Text>
                    <Text className="text-gray-500">Views</Text>
                  </View>
                </View>
              </View>
              <Video
                avatar={image.avatar}
                header={
                  "Businessman Work with Laptop Computer in Office Manager Solving Problem"
                }
                subHeader={"jsmastery"}
                dropdown={icons.menu}
                content={images.videoOne}
              />
              <Video
                avatar={image.avatar}
                header={"Woman walks down a Tokyo..."}
                subHeader={"jsmastery"}
                dropdown={icons.menu}
                content={images.videoFive}
              />
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
