import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AppHeader = () => {
    const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        height: 55,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Pressable onPress={() => navigation.navigate("Main")}>
        <Ionicons name="arrow-back" size={24} color="#d6807a" />
      </Pressable>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({});
