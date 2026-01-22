import { Image, Pressable, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

type ProfileCardProps = {
  onEdit?: () => void;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ onEdit }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.avatar}
        source={{ uri: "https://randomuser.me/img/creator_arron.png" }}
      />

      <Text style={styles.name}>Beytullah Atasoy</Text>
      <Text style={styles.desc}>React Native Developer</Text>

      <Pressable style={styles.button} onPress={onEdit}>
        <Text style={styles.buttonText}>Profili Düzenle</Text>
        <AntDesign name="edit" size={18} color="black" />
      </Pressable>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  desc: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
});
