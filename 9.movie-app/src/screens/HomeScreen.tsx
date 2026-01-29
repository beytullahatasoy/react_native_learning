import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../themes/colors";
import { s } from "react-native-size-matters";
import { useState } from "react";
import searchMovies, { OmdbSearchItem } from "../api/omdb";
import { FlatList } from "react-native";
import MovieCard from "../components/MovieCard";

const HomeScreen = () => {
  const [query, setQuery] = useState("Batman");
  const [movies, setMovies] = useState<OmdbSearchItem[]>([]);

  const [Loader, setLoader] = useState(false);

  const onSubmit = async () => {
    // arrow function
    setLoader(true);
    const results = await searchMovies(query);
    const incomingMovies = results?.Search || [];
    setMovies(incomingMovies);
    setLoader(false);
  };

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      {/* SafeAreaView'da oluşan boşlukları kaldırmak için edges props'u boş bırakıldı */}
      <View style={styles.searchContainer}>
        <TextInput
          value={query}
          style={styles.searchInput}
          onChangeText={setQuery}
          placeholder="Search (e.g., Batman, Spiderman)"
          placeholderTextColor={colors.inactiveColor}
          returnKeyType="search"
        />
        <Pressable onPress={onSubmit} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </Pressable>
      </View>

      {Loader ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={(item, index) => `${item.imdbID}-${index}`}
          key={`movie= ${movies.length}`}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    gap: s(8),
  },
  searchContainer: {
    padding: s(12),
    flexDirection: "row",
  },
  searchInput: {
    flex: 1,
    borderWidth: s(1),
    borderColor: colors.borderColor,
    color: colors.textColor,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: s(10),
    borderRadius: s(8),
    fontWeight: 700,
  },
  searchButton: {
    backgroundColor: colors.buttonColor,
    paddingHorizontal: s(16),
    borderRadius: s(8),
    justifyContent: "center",
  },
  searchButtonText: {
    color: colors.textColor,
    fontWeight: 700,
  },
});
