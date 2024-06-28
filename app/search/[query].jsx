import { Text, View, Image, FlatList, RefreshControl } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import VideoCard from "../../components/VideoCard";
import image from "../../constants/images";
import React, { useState, useEffect } from "react";

const Search = () => {
  const { query } = useLocalSearchParams();
  const [refreshing, setRefreshing] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data based on the current search query
    if (query.trim() === "") {
      setFilteredData(data); // If no query, show all data
    } else {
      const filtered = data.filter(
        (item) =>
          item.header.toLowerCase().includes(query.toLowerCase()) ||
          item.subHeader.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query]);

  const data = [
    {
      id: 1,
      avatar: image.avatar,
      header:
        "Businessman Work with Laptop Computer in Office Manager Solving Problem",
      subHeader: "jsmastery",
    },
    {
      id: 2,
      avatar: image.avatar,
      header: "Man Test The Ability Of Ai In Todays World",
      subHeader: "jsmastery",
      content: images.virtual,
    },
  ];

  const onRefresh = async () => {
    setRefreshing(true);
    // recalls video if new videos appeared
    setRefreshing(false);
    console.log("app refreshing is successful.");
  };
  return (
    <SafeAreaView className="h-[100%] w-[100%] bg-primary px-6">
      <FlatList // FlatLists support both horizontal and vertical scrolls unlike scroll views (scroll view does not support adding a horizontal and vertical scroll view)
        data={filteredData.length === 0 ? [] : filteredData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <VideoCard
              avatar={item.avatar}
              header={item.header}
              subHeader={item.subHeader}
              dropdown={icons.menu}
              content={item.content}
            />
          </>
        )}
        ListHeaderComponent={() => (
          <>
            <Text className="text-[#CDCDE0] text-base mt-4">
              Search Results
            </Text>
            <Text className="text-[#CDCDE0] text-base mt-4  font-extrabold">
              {query}
            </Text>
            <SearchInput initialState={query} />
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
