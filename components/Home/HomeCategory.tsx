import { StyleSheet, Image, FlatList, Pressable } from "react-native";
import { Text, View } from "../Themed";
import movie from "../../assets/data/movie";
import { Category } from "../../types";
import { useNavigation } from "@react-navigation/native";

interface HomeCategoryProps {
  category: Category;
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  const navigation = useNavigation();

  const onMoviePress = (movie) => {
    navigation.navigate("Root", {
      screen: "Home",
      params: { screen: "MovieDetailsScreen", params: { id: movie?.id } },
    });
  };

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image style={styles.image} source={{ uri: item.poster }} />
          </Pressable>
        )}
      />
    </>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
});
