import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { images, icons } from "../../constants";
import Input from "../../components/Input";
import CustomButton from "../../components/CustomButton";
import { handleChange } from "../../utils/handleChange";
import { router, Link } from "expo-router";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4" contentContainerStyle={{ height: "100%" }}>
        <Image
          source={images.logo}
          className="w-24 mt-5"
          resizeMode="contain"
        />
        <View className="my-2">
          <Text className="text-white font-extrabold text-xl mb-10">
            Sign up
          </Text>
          <Input
            label="username"
            placeholder="Your Unique UserName"
            value={formData.username}
            onChange={(value) =>
              handleChange(formData, setFormData, "username", value)
            }
          />
          <Input
            label="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={(value) =>
              handleChange(formData, setFormData, "email", value)
            }
            keyboardType="email-address"
          />
          <View className="relative">
            <Input
              label="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(value) =>
                handleChange(formData, setFormData, "password", value)
              }
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-12"
            >
              <Image
                source={showPassword ? icons.eyeHide : icons.eye}
                className="w-5 h-5"
              />
            </TouchableOpacity>
          </View>
          <View className="flex items-center justify-center mt-2">
            <CustomButton
              title="Sign up"
              containerStyles="bg-secondary rounded-lg py-3 w-full"
              textStyles="text-center font-extrabold text-base capitalize"
              handlePress={() => console.log(formData)}
            />
            <View className="flex-row items-center gap-1 pt-4">
              <Text className="text-[#CDCDE0] text-base">
                Already have an account?
              </Text>
              <Link href="/sign-in">
                <Text className="text-secondary-100 text-base">Login</Text>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
