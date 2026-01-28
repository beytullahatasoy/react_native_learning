import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { OmdbSearchItem } from "../api/omdb";
import { s } from "react-native-size-matters";

const MovieCard = ({ movie }: { movie: OmdbSearchItem }) => {
  return (
    <Pressable style={styles.MovieCard}>
      <View style={styles.movieCardDetails}>
        <Image style={styles.movieCardImage} source={{ uri: movie.Poster }} />
        <View style={styles.movieCardTittles}>
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
  movieCardDetails: {},
  movieCardImage: {},
  movieCardTittles: {},
  movieTitle: {},
  movieYear: {},
});
