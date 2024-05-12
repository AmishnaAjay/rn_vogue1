import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfilePage = ({ navigation }) => {
  const handleLogout = () => {
    AsyncStorage.removeItem("token");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
      <SafeAreaView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            marginTop:40
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX41D6gpBrn6Eqgqb1_cT62Q4_mF7J47sbvI7sc3EuHQ&s",
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
            Profile
          </Text>
        </View>

        <ScrollView style={{ paddingTop: 20 }}>
          <ProfileCard title={"My Orders"} action={() => {}} />
          <ProfileCard title={"Wishlsit"} action={() => {}} />
          <ProfileCard title={"My Address"} action={() => {}} />
          <ProfileCard title={"Logout"} action={handleLogout} isLogout />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});

const ProfileCard = ({ title, action, isLogout }) => {
  return (
    <TouchableOpacity
      style={[
        {
          height: 50,
          width: "100%",
          borderColor: "#d6807a",
          borderWidth: 1,
          marginTop: 20,
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 5,
          justifyContent: "space-between",
          paddingHorizontal: 10,
        },
        isLogout && {
          borderWidth: 1,
          backgroundColor: "#d6807a",
          color: "white",
          marginTop: 50,
          justifyContent: "center",
        },
      ]}
      onPress={() => {
        action();
      }}
    >
      <Text
        style={[
          { fontSize: 20, fontWeight: "500", color: "#d6807a" },
          isLogout && { color: "black" },
        ]}
      >
        {title}
      </Text>
      {!isLogout && (
        <Ionicons name="chevron-forward" size={24} color="#d6807a" />
      )}
    </TouchableOpacity>
  );
};
