import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import { Video } from "expo-av";
import { Episode } from "../../types";
import { Playback } from "expo-av/build/AV";

//
//
interface VideoPlayerProps {
  episode: Episode;
}
//////
const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const [status, setStatus] = useState({});
  const video = useRef(null);
  //   const video = useRef<Playback>(null);

  //   useEffect(() => {
  //     if (!video) {
  //       return;
  //     }
  //     (async () => {
  //       await video?.current?.unloadAsync();
  //       await video?.current?.loadAsync({ uri: episode.video }, {}, false);
  //     })();
  //   }, [episode]);

  ////
  return (
    <View style={{ paddingBottom: 10 }}>
      <Video
        ref={video}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
        source={{
          uri: episode.video,
        }}
        // posterSource={{ uri: episode.poster }}
        // posterStyle={{
        //   resizeMode: "contain",
        // }}
        // usePoster={true}
        resizeMode="contain"
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({});
