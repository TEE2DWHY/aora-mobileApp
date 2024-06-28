import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../constants/images";
import icons from "../../constants/icons";
import images from "../../constants/images";
import VideoCard from "../../components/VideoCard";
import { useGlobalContext } from "../../context/GlobalProvider";
import { router } from "expo-router";

const Profile = () => {
  const { setIsLoggedIn } = useGlobalContext();
  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <View className="px-6">
              <TouchableOpacity
                onPress={() => {
                  setIsLoggedIn(false);
                  router.push("/sign-in");
                }}
              >
                <Image
                  source={icons.logout}
                  resizeMode="contain"
                  className="absolute right-2 mt-8 w-6 h-6"
                />
              </TouchableOpacity>

              <View className="flex items-center mt-20 mb-4">
                <Image source={image.avatar} />
                <Text className="text-white font-semibold mt-[10px] text-2xl">
                  Tee2dWhy
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
              <VideoCard
                avatar={image.avatar}
                header={
                  "Businessman Work with Laptop Computer in Office Manager Solving Problem"
                }
                subHeader={"Tee2dWhy"}
                dropdown={icons.menu}
                content={images.videoOne}
              />
              <VideoCard
                avatar={image.avatar}
                header={"Dogs walks down a Tokyo House..."}
                subHeader={"Tee2dWhy"}
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
