import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../themes/colors";
import { s, vs } from "react-native-size-matters";
import CATEGORIES from "../constants/categories";
import searchMovies, { OmdbSearchItem } from "../api/omdb";
import { FlatList } from "react-native-gesture-handler";
import MovieCard from "../components/MovieCard";

const CatagoriesScreen = () => {
  const [active, setActive] = useState(CATEGORIES[0]);
  const [movies, setMovies] = useState<OmdbSearchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await searchMovies(active.query, 1);
      setMovies(res.Search || []);
    } catch {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchMovies();
  }, [active]);

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <ScrollView
        horizontal
        contentContainerStyle={{ padding: s(12), gap: s(8) }}
      >
        {CATEGORIES.map((c) => (
          <Pressable key={c.key} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{c.label}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={colors.activeColor} />
        </View>
      ) : error ? (
        <View style={{ padding: s(12) }}>
          <Text style={{ color: "red" }}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={(item, index) => `${item.imdbID}-${index}`}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
};

export default CatagoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    gap: s(8),
  },
  categoryItem: {
    backgroundColor: colors.buttonColor,
    height: vs(30),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.borderColor,
    paddingHorizontal: s(14),
    borderRadius: 999,
  },
  categoryText: {
    color: colors.textColor,
    lineHeight: vs(15),
    fontWeight: "700",
  },
});
