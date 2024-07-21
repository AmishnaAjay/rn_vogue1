import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenWidth } from "../app/const/dimensions";

const AppHeader = ({ transparant, title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        height: 55,
        width: ScreenWidth,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Pressable onPress={() => navigation.pop()}>
        <Ionicons name="arrow-back" size={24} color="#d6807a" />
      </Pressable>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({});
