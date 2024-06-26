import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { icons, images } from "../constants";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const thumbnails = [
    "https://biteable.com/blog/video-thumbnails-matter/",
    "https://us.sganalytics.com/assets/uploads/insight_post/5437a-sga-case-study-data-analytics-youtube-thumbnail.jpg",
  ];

  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item._id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Text>Playing...</Text>
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        ></TouchableOpacity>
      )}
      <ImageBackground
        // source={{uri: item.thumbnail}}
        source={images.videoFive}
        className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
        resizeMode="cover"
      />
      <Image
        source={icons.play}
        className="absolute w-12 h-12 top-[45%] left-[40%]"
        resizeMode="contain"
      />
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  return (
    <>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TrendingItem activeItem={activeItem} item={item} />
          // <Text className="text-white text-3xl ">{item.id}</Text>
        )}
        horizontal
      />
    </>
  );
};

export default Trending;
