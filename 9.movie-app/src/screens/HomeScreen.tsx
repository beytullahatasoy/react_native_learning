import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../themes/colors";
import { s, vs } from "react-native-size-matters";
import { useEffect, useState } from "react";
import searchMovies, { OmdbSearchItem } from "../api/omdb";
import { FlatList } from "react-native";
import MovieCard from "../components/MovieCard";

const HomeScreen = () => {
  const [query, setQuery] = useState("Batman");
  const [movies, setMovies] = useState<OmdbSearchItem[]>([]);

  const [Loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [haseMore, setHasMore] = useState(true);
  const [LoadingMore, setLoadingMore] = useState(false);

  const fetchMovies = async (pageNum: number, isNewSearch = false) => {
    if (query) {
      setMovies([]);
      setHasMore(false);
      return;
    }

    if (isNewSearch) setLoader(true);

    setError("");

    // arrow function

    try {
      const results = await searchMovies(query, pageNum);
      if (results.Response === "True") {
        const incomingMovies = results?.Search || [];

        setHasMore(incomingMovies.length == 10);

        setMovies((prev) => {
          if (pageNum === 1) {
            return incomingMovies;
          }
          return [...prev, ...incomingMovies];
        });
      } else {
        if (pageNum === 1) {
          setMovies([]);
          setError(results.Error || "No movies found");
        }
        setHasMore(false);
      }
    } catch {
      if (pageNum === 1) {
        setMovies([]);
        setError("Something went wrong");
      }
    } finally {
      if (isNewSearch) setLoader(false);
    }
  };

  const onSubmit = () => {
    fetchMovies(1, true);
  };

  useEffect(() => {
    // listeliyor bos gelmiyor
    onSubmit();
  }, []);

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
          onSubmitEditing={onSubmit}
        />
        <Pressable onPress={onSubmit} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </Pressable>
      </View>

      {Loader ? (
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={"large"} />
          <Text
            style={{
              color: colors.textColor,
              marginTop: vs(4),
              textAlign: "center",
            }}
          >
            Loading..
          </Text>
        </View>
      ) : error ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: colors.textColor,
              fontSize: s(14),
            }}
          >
            {error}
          </Text>
        </View>
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
    justifyContent: "center",
  },
});
