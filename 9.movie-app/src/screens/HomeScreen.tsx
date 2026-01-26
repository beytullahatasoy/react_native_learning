import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../themes/colors";
import { s } from "react-native-size-matters";
import { useState } from "react";

const HomeScreen = () => {
  const [query, setQuery] = useState("Batman");

  const onSubmit = () => {
    console.log("Search submitted:", query);
  };

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      {" "}
      // SafeAreaView'da oluşan boşlukları kaldırmak için edges props'u boş bir
      dizi olarak ayarlandı
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
