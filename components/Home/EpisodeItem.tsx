import { Image, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

//
//
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
    <View style={{ paddingHorizontal: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 15,
          paddingBottom: 10,
        }}
      >
        <Image
          style={{
            height: 75,
            aspectRatio: 16 / 9,
            resizeMode: "cover",
            borderRadius: 5,
          }}
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
      <Text
        style={{
          paddingBottom: 5,
          borderBottomWidth: 1,
          borderBottomColor: "#222831",
        }}
      >
        {episode.plot}
      </Text>
    </View>
  );
};

export default EpisodeItem;

const styles = StyleSheet.create({});
