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
    scale: 1.2,
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

const dummyData = [
  {
    id: 1,
    thumbnail:
      "https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896",
  },
  {
    id: 2,
    thumbnail:
      "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1448734171.jpg",
  },
  {
    id: 3,
    thumbnail:
      "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
  },
  {
    id: 4,
    thumbnail:
      "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
  },
];

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      className="mr-5"
      // animation={activeItem._id === item._id ? zoomIn : zoomOut}
      animation={activeItem.id === item.id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Text>Playing...</Text>
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            // source={{uri: item.thumbnail}}
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="absolute w-12 h-12"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(dummyData[0]);
  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };
  return (
    <>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TrendingItem activeItem={activeItem} item={item} />
          // <Text className="text-white text-3xl ">{item.id}</Text>
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
        contentOffset={{ x: 170 }}
        horizontal
      />
    </>
  );
};

export default Trending;
