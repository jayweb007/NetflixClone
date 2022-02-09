import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import movie from "../assets/data/movie";
import React from "react";
import EpisodeItem from "../components/Home/EpisodeItem";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const statusBarHeight = getStatusBarHeight();
//
const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      <View style={{ marginHorizontal: 10 }}>
        <EpisodeItem episode={firstEpisode} />
        <Text style={styles.title}>{movie.title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              color: "#00aa00",
              fontSize: 17,
              fontWeight: "bold",
              paddingRight: 20,
            }}
          >
            98% match
          </Text>
          <Text style={{ paddingRight: 10, color: "lightgray" }}>
            {movie.year}
          </Text>
          <View
            style={{
              width: 35,
              height: 25,
              backgroundColor: "yellow",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
              12+
            </Text>
          </View>
          <Text style={{ paddingHorizontal: 10 }}>
            {movie.numberOfSeasons} Seasons
          </Text>
          <MaterialIcons name="hd" size={24} color="white" />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            height: 40,
            backgroundColor: "white",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="play" size={24} color="black" />
          <Text
            style={{
              color: "black",
              fontSize: 17,
              fontWeight: "bold",
              paddingLeft: 10,
            }}
          >
            Play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            height: 40,
            backgroundColor: "#3C4245",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 15,
          }}
        >
          <AntDesign name="download" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
              paddingLeft: 10,
            }}
          >
            Download
          </Text>
        </TouchableOpacity>
        <Text>{movie.plot}</Text>
        <Text style={{ color: "gray", marginTop: 10, marginBottom: 2 }}>
          Cast: {movie.cast}...more
        </Text>
        <Text style={{ color: "gray" }}>Creator: {movie.creator}</Text>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 15,
              paddingLeft: 22,
              paddingRight: 22,
              paddingBottom: 20,
              borderBottomWidth: 3,
              borderBottomColor: "#FF0000",
              marginRight: 20,
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
            <Text
              style={{
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 10,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              My List
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 15,
              paddingLeft: 25,
              paddingRight: 25,
              paddingBottom: 20,
              marginRight: 20,
            }}
          >
            <AntDesign name="like2" size={24} color="white" />
            <Text
              style={{
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 10,
                color: "#686D76",
                fontWeight: "bold",
              }}
            >
              Rate
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 15,
              paddingLeft: 25,
              paddingRight: 25,
              paddingBottom: 20,
              marginRight: 20,
            }}
          >
            <Ionicons name="paper-plane-outline" size={24} color="white" />
            <Text
              style={{
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 10,
                color: "#686D76",
                fontWeight: "bold",
              }}
            >
              Share
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              paddingTop: 10,
              paddingRight: 20,
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            EPISODES
          </Text>
          <Text
            style={{
              paddingTop: 10,
              color: "gray",
              fontWeight: "bold",
              fontSize: 19,
            }}
          >
            MORE LIKE THIS
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: statusBarHeight,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
});