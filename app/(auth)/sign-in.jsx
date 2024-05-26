import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import { images } from "../../constants";
import Input from "../../components/Input";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4">
        <Image
          source={images.logo}
          className="w-[100px] mt-5"
          resizeMode="contain"
        />
        <View className="my-2">
          <Text className="text-white font-extrabold text-[22px] mb-10">
            Sign up
          </Text>
          <Input label="username" placeholder="Your Unique UserName" />
          <Input label="email" placeholder="JohnDoe@gmail.com" />
          <Input label="password" placeholder="Password" type="password" />
          <View className="flex items-center justify-center mt-2">
            <CustomButton
              title="Sign up"
              containerStyles="bg-secondary rounded-lg py-3  w-full"
              textStyles="text-center font-extrabold text-base capitalize"
            />
            <Text className="text-[#CDCDE0] pt-4 text-base">
              Already have an account?
              <Text className="text-secondary-100"> Login</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
