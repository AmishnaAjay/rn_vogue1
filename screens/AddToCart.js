import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AddCartDetails } from "../assets/data/data";
import { useNavigation } from "@react-navigation/native";

const AddToCart = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS == "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <KeyboardAvoidingView>
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
            Shopping Cart
          </Text>
        </View>
        <ScrollView>
          {AddCartDetails.map((item, i) => {
            return (
              <View  key={i} style={{ flexDirection: "row", padding: 15, margin: 10, borderWidth: 1, borderRadius: 10, borderColor: "#d6807a" }}>
                <View >
                  <Image
                    style={{resizeMode:'contain', width:100, height:100}}
                    source={{ uri: item?.image }}
                  />
                </View>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <View style={{ flexDirection: "column", width: 170 }}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {item?.title}
                      </Text>
                      <Text
                        style={{ fontSize: 15, marginTop: 5, color: "black" }}
                      >
                        Qauntity: 
                        {item?.qty}
                      </Text>
                    </View>
                    <View>
                      <Pressable>
                        <Entypo name="cross" size={24} color="red" />
                      </Pressable>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 20,
                      padding: 15,
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        
                        {item?.price}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      <Pressable>
                        <Ionicons
                          name="add-circle-outline"
                          size={24}
                          color="#d6807a"
                        />
                      </Pressable>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#d6807a",
                        }}
                      >
                        1
                      </Text>
                      <Pressable>
                        <AntDesign
                          name="minuscircleo"
                          size={19}
                          color="#d6807a"
                          style={{ marginTop: 3, marginLeft: 5 }}
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <ScrollView>
          <View style={{ padding: 13, gap: 13 }}>
            
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: "#d6807a",
                borderBottomWidth: 2,
                paddingBottom: 12,
              }}
            >
              <Text
                style={{ color: "#d6807a", fontSize: 15, fontWeight: "bold" }}
              >
                Total Price:
              </Text>
              <Text
                style={{ color: "#d6807a", fontSize: 25, fontWeight: "bold" }}
              >
                £23.55
              </Text>
            </View>
          </View>
          <Pressable
        onPress={() => navigation.navigate("")}
          style={{
            width: 200,
            backgroundColor: "#d6807a",
            borderRadius: 10,
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
              fontWeight: "bold"
            }}
          >
            Checkout
          </Text>
        </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddToCart;

const styles = StyleSheet.create({});
