import {
  FlatList,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { icons } from "../constants";
import { Video, ResizeMode } from "expo-av";

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

const dummyData = [
  {
    id: 1,
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

    subtitle: "By Blender Foundation",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg",
    title: "Big Buck Bunny",
  },
  {
    id: 2,
    description: "The first Blender Open Movie from 2006",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    subtitle: "By Blender Foundation",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Elephants_Dream_-_Emo_and_Proog.jpg",
    title: "Elephant Dream",
  },
  {
    id: 3,
    description:
      "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    subtitle: "By Google",
    thumb: "https://www.janmorgenstern.com/assets/2010/09/sintel_poster.jpg",
    title: "For Bigger Blazes",
  },
  {
    id: 4,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    subtitle: "By Google",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg",
    title: "For Bigger Escape",
  },
  {
    id: 5,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    subtitle: "By Google",
    thumb:
      "https://images1.vinted.net/t/03_01083_cfyMWr2jFq8UVkk7HtKzGu2f/f800/1638372786.jpeg?s=24cf37c1a04c12f286e47d00ab8e51e1b8391ae0",
    title: "For Bigger Fun",
  },
  {
    id: 6,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    subtitle: "By Google",
    thumb:
      "https://resizing.flixster.com/AOVscsV7du8kSRJdohU10cOKKmQ=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186109_b_v8_aa.jpg",
    title: "For Bigger Joyrides",
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
        <Video
          source={{ uri: item.sources }}
          className="w-52 h-72 rounded-[35px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay // allows the video to play
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumb }}
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

const Trending = () => {
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
