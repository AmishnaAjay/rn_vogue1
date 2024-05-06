import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Buy = () => {
  const navigation = useNavigation();
  ``
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS == "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View
          style={{
            backgroundColor: "#d6807a",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
          onPress={() => navigation.navigate("ProductDetail")}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text
            style={{
              marginLeft: 20,
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Shipping & Payment
          </Text>
        </View>
        <KeyboardAvoidingView
          style={{
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              borderColor: "#d6807a",
              borderWidth: 1,
              width: 360,
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 15,
              marginTop: 30,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#d6807a" }}
            >
              Shipping Address
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10, gap: 7, marginTop: 30 }}>
                <Text style={{ color: "#d6807a", fontWeight: "bold" }}>
                  Amishna Ajayakumar
                </Text>
                <Text style={{ color: "#d6807a" }}>124 Argyle Road</Text>
                <Text style={{ color: "#d6807a" }}>Custom House</Text>
                <Text style={{ color: "#d6807a" }}>E16 3NE</Text>
              </View>
              <Pressable  
              onPress={ () => navigation.navigate("AddAddress")}>
              <View style={{ justifyContent: "flex-end", marginLeft: 100, flexDirection: "row", gap: 5 }}>
                <Ionicons name="add-circle" size={24} color="#d6807a" />
                <Text style={{color: "#d6807a",marginTop: 3, fontSize: 16 }}>Add</Text>
              </View>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              borderColor: "#d6807a",
              borderWidth: 1,
              width: 360,
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 15,
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <View style={{ marginTop: 10, gap: 7,  }}>
              <Text
                style={{ color: "#d6807a", fontSize: 18, fontWeight: "bold" }}
              >
                Payment Method
              </Text>
              <View style={{ flexDirection: "row", gap: 12, marginTop: 20 }}>
                <FontAwesome5 name="cc-visa" size={24} color="#d6807a" />
                <Text style={{ color: "#d6807a" }}>Visa *******3456</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                marginLeft: 100,
                height: 140,
              }}
            >
              <MaterialIcons name="edit" size={24} color="#d6807a" />
            </View>
          </View>
          <ScrollView>
            <View style={{ padding: 13, gap: 13 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "#fad7d7",
                  borderBottomWidth: 2,
                  paddingBottom: 12
                }}
              >
                <Text
                  style={{ color: "#d6807a", fontSize: 15, fontWeight: "bold" }}
                >
                  Price:
                </Text>
                <Text  style={{ color: "#d6807a", fontSize: 15, fontWeight: "bold" }}>£23.55</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "#fad7d7",
                  borderBottomWidth: 2,
                  paddingBottom: 12
                }}
              >
                <Text
                  style={{ color: "#d6807a", fontSize: 15, fontWeight: "bold" }}
                >
                  Shipping:
                </Text>
                <Text  style={{ color: "#d6807a", fontSize: 15, fontWeight: "bold" }}>Free</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "#fad7d7",
                  borderBottomWidth: 2,
                  paddingBottom: 12
                }}
              >
                <Text
                  style={{ color: "#d6807a", fontSize: 15, fontWeight: "bold" }}
                >
                  Total Price:
                </Text>
                <Text  style={{ color: "#d6807a", fontSize: 25, fontWeight: "bold" }}>£23.55</Text>
              </View>
            </View>
          </ScrollView>
          <Pressable
        onPress={() => navigation.navigate("Payment")}
          style={{
            width: 200,
            backgroundColor: "#d6807a",
            borderRadius: 6,
            borderColor: "#fad7d7",
            borderWidth: 2,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            marginTop: 15
          }}

          
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Confirm & Pay
          </Text>
        </Pressable>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Buy;

const styles = StyleSheet.create({});
