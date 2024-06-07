import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../constants/images";
import SearchInput from "../../components/SearchInput";
import { icons } from "../../constants";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // recalls video if new videos appeared
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="h-[100%] w-[100%] bg-primary px-6">
      <FlatList // FlatLists support both horizontal and vertical scrolls unlike scroll views (scroll view does not support adding a horizontal and vertical scroll view)
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-2xl text-white">{item.id} </Text>
        )}
        ListHeaderComponent={() => (
          <>
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
            </View>
            <SearchInput placeholder="Search for a video topic" />
            <Text className="text-[#CDCDE0] text-base mt-4">
              Trending Video
            </Text>
            <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
          </>
        )}
        ListEmptyComponent={() => (
          // what to show if no data is passed to FlatList
          <EmptyState
            title="No Videos"
            subTitle="Be the first person to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> // this allows us to load new data by refreshing
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
