import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import VideoCard from "../../components/VideoCard";
import image from "../../constants/images";
import React, { useState } from "react";

const Search = () => {
  const { query } = useLocalSearchParams();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // recalls video if new videos appeared
    setRefreshing(false);
    console.log("app refreshing is successful.");
  };
  return (
    <SafeAreaView className="h-[100%] w-[100%] bg-primary px-6">
      <FlatList // FlatLists support both horizontal and vertical scrolls unlike scroll views (scroll view does not support adding a horizontal and vertical scroll view)
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        // renderItem={({ item }) => (
        //   <Text className="text-2xl text-white">{item.id} </Text>
        // )}
        ListHeaderComponent={() => (
          <>
            <View className="flex-row justify-between items-center border-red-700 w-[100%]"></View>
            <Text className="text-[#CDCDE0] text-base mt-4">
              Search Results
            </Text>
            <Text className="text-[#CDCDE0] text-base mt-4  font-extrabold">
              {query}
            </Text>
            <SearchInput initialState={query} />
            <VideoCard
              avatar={image.avatar}
              header={
                "Businessman Work with Laptop Computer in Office Manager Solving Problem"
              }
              subHeader={"jsmastery"}
              dropdown={icons.menu}
              content={images.videoOne}
            />
            <VideoCard
              avatar={image.avatar}
              header={"Woman walks down a Tokyo..."}
              subHeader={"jsmastery"}
              dropdown={icons.menu}
              content={images.videoFive}
            />
          </>
        )}
        ListEmptyComponent={() => (
          // what to show if no data is passed to FlatList
          <EmptyState
            title="No Videos Found"
            subTitle="No Videos Found For This Search Query"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> // this allows us to load new data by refreshing
        }
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
