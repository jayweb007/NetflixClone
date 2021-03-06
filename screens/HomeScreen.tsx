import { FlatList, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import HomeCategory from "../components/Home/HomeCategory";
import { Text, View } from "../components/Themed";
import categories from "../assets/data/categories";
import React from "react";

// const firstCategory = categories.items[0];
const statusBarHeight = getStatusBarHeight();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    // paddingVertical: 20,
    paddingTop: statusBarHeight,
    // backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
