import { StyleSheet, Text, View, Image } from "react-native";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subTitle }) => {
  return (
    <View className="justify-center items-center">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain "
      />
      <Text className="capitalize text-white text-xl text-center mt-2 font-psemibold">
        {title}
      </Text>
      <Text className="capitalize text-gray-100 text-sm font-pmedium">
        {subTitle}
      </Text>
      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5 bg-secondary p-4 rounded-xl"
        textStyles="text-center text-base font-semibold"
      />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({});
