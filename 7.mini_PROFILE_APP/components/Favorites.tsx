import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

const Favorites = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: vs(8) }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <Image
          source={{ uri: `https://picsum.photos/200?random=${i}` }}
          key={i}
          style={{
            width: s(100),
            height: s(100),
            borderRadius: s(8),
            marginRight: s(8),
          }}
        />
      ))}
    </ScrollView>
  );
};
export default Favorites;

const styles = StyleSheet.create({});
