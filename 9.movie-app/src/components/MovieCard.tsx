import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const MovieCard = () => {
  return (
    <Pressable style={styles.MovieCard}>
      <View style={styles.movieCardDetails}>
        <Image style={styles.movieCardImage} />
        <View style={styles.movieCardTittles}>
          <Text style={styles.movieTitle}>Movie Title</Text>
          <Text style={styles.movieYear}>2026</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  MovieCard: {},
  movieCardDetails: {},
  movieCardImage: {},
  movieCardTittles: {},
  movieTitle: {},
  movieYear: {},
});
