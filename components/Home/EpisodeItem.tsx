import { Image, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

// id: 'episode1',
//                     title: '1. Pilot Part 1 & 2',
//                     poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep0.jpg',
//                     duration: '1h 21m',
//                     plot: 'When Harvey\'s promotion requires him to recruit and hire a graduate of Harvard Law, he chooses Mike Ross. But Mike doesn\'t actualy have a law degree',
//                     video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//                 }

interface EpisodeItemProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}
const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode } = props;
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 15,
        }}
      >
        <Image
          style={{ width: 150, height: 100, borderRadius: 5 }}
          source={{ uri: episode.poster }}
        />
        <View
          style={{
            flexDirection: "column",
            marginRight: "auto",
            marginLeft: 7,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#bdbdbd" }}>
            {episode.title}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#727272" }}>
            {episode.duration}
          </Text>
        </View>
        <AntDesign name="download" size={24} color="white" />
      </View>
      <Text>{episode.plot}</Text>
    </View>
  );
};

export default EpisodeItem;

const styles = StyleSheet.create({});
