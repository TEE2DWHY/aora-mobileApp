import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoggedIn, isLoading } = useGlobalContext();
  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />;
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {/* // with this the whole screen would be scrollable (so that in smaller
        devices when the height of the screen is large users would be able to
        scroll). */}
        <View className="justify-center items-center w-full min-h-[90vh] px-4">
          <Image
            source={images.logo}
            className="w-[126px] h-[80px]"
            resizeMode="contain" //this resize mode fits the image into our specified width and height
          />
          <Image
            source={images.cards}
            className="max-w[380] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="mt-5">
            <Text className="capitalize text-3xl font-bold text-center text-white">
              discover endless possibilities with
              <Text className="text-yellow-400"> Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute w[136px] h-[15px] -bottom-2 -right-16 text"
              resizeMode="contain"
            />
          </View>
          <Text className="text-center py-5 px-4   text-base font-pregular text-gray-100 ">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            title="Continue With Email"
            handlePress={() => {
              router.push("/sign-up");
            }}
            containerStyles="bg-secondary rounded-lg py-3  w-5/6"
            textStyles="text-center font-extrabold text-base"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
      {/* the statusBar allows us to see battery percentage and every other stuffs at the top */}
    </SafeAreaView>
  );
}
