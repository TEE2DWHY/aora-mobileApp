import { FlatList, Image, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../constants/images";
import Video from "../../components/Video";
import icons from "../../constants/icons";
import { BsThreeDotsVertical } from "react-icons/bs";
import images from "../../constants/images";

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className="px-5">
              <View className="flex items-center mt-10">
                <Image source={image.avatar} />
                <Text className="text-white font-semibold mt-[10px] text-2xl">
                  jsmastery
                </Text>
                <View className="flex-row gap-3 mt-2">
                  <Text className="text-white flex-col">
                    10 <Text>Post</Text>
                  </Text>
                  <Text className="text-white">
                    10 <Text>Post</Text>
                  </Text>
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
                header={
                  "Bull trading with computer Bullish in Stock market and"
                }
                subHeader={"jsmastery"}
                dropdown={icons.menu}
                content={images.videoTwo}
              />
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
