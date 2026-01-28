import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { OmdbSearchItem } from "../api/omdb";
import { s } from "react-native-size-matters";
import colors from "../themes/colors";

const MovieCard = ({ movie }: { movie: OmdbSearchItem }) => {
  return (
    <Pressable style={styles.MovieCard}>
      <View style={styles.movieCardDetails}>
        <Image style={styles.movieCardImage} source={{ uri: movie.Poster }} />
        <View style={styles.movieTittles}>
          <Text style={styles.movieTitle}>{movie.Title}</Text>
          <Text style={styles.movieYear}>{movie.Year}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  MovieCard: {
    width: "50%",
    padding: s(8),
  },
  movieCardDetails: {
    backgroundColor: colors.movieBackgroundColor,
    borderRadius: s(12),
    overflow: "hidden",
  },
  movieCardImage: {
    width: "100%",
    aspectRatio: 2 / 3,
    backgroundColor: colors.movieBackgroundColor,
    resizeMode: "cover",
  },
  movieTittles: {
    padding: s(10),
  },
  movieTitle: {
    color: "#fff",
    fontSize: s(12),
    fontWeight: 700,
  },
  movieYear: {
    color: colors.inactiveColor,
    fontSize: s(10),
  },
});
