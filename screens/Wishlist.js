import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    KeyboardAvoidingView,
    FlatList,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { Ionicons } from "@expo/vector-icons";
  import { Entypo } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { AddCartDetails } from "../assets/data/data";
  import { useNavigation } from "@react-navigation/native";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { get } from "../app/config/apiConfig";
  
  const Wishlist = () => {
    const navigation = useNavigation();
    const [wishlistItems, setWishlistItems] = useState([]);
    const getAllWishlistItems = async () => {
      const token = await AsyncStorage.getItem("token");
      get(`/wishlist?token=${token}`).then((res) => {
        
       
        setWishlistItems(res?.data?.products);
      });
    };
  
    useEffect(() => {
        getAllWishlistItems();
    }, []);
  
    return (
      <SafeAreaView
        style={{
          paddingTop: Platform.OS == "android" ? 40 : 0,
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ flex: 1, paddingTop: 20 }}>
          <FlatList
            data={wishlistItems}
            renderItem={({ item }) => {
              return (
                <View
                  key={item?.product?._id}
                  style={{
                    flexDirection: "row",
                    padding: 15,
                    margin: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "#d6807a",
                  }}
                >
                  <View>
                    <Image
                      style={{ resizeMode: "contain", width: 100, height: 100 }}
                      source={{
                        uri:
                          item?.product?.image ?? item?.product?.images[0]?.url,
                      }}
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
                          {item?.product?.title}
                        </Text>
                        <Text
                          style={{ fontSize: 15, marginTop: 5, color: "black" }}
                        >
                          Qauntity:
                          {item?.quantity}
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
                          {item?.product?.price}
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
                        { item?.quantity}
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
            }}
          />
        </View>
  
       
        
      </SafeAreaView>
    );
  };
  
  export default Wishlist;
  
  const styles = StyleSheet.create({});
  