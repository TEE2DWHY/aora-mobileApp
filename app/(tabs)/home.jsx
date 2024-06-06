import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../constants/images";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  return (
    <SafeAreaView className="h-[100%] w-[100%] bg-primary px-6">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text className="text-2xl">{item.id} </Text>}
        ListHeaderComponent={() => (
          <View className="flex-row justify-between items-center border-red-700 w-[100%] mt-16">
            <View className="flex gap-2">
              <Text className="capitalize text-gray-100 text-base">
                welcome back
              </Text>
              <Text className="capitalize text-white text-xl font-pbold ">
                jsmastery
              </Text>
            </View>
            <View>
              <Image
                source={image.logoSmall}
                className="w-[40px] h-[40px]"
                resizeMode="contain"
              />
            </View>
            <SearchInput />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
