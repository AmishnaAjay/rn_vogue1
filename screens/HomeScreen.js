import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { CategoryImages, RecommendedImages, ScrollImages, SliderImages } from "../assets/data/data";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../app/config";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const { width: WIN_WIDTH, height: WIN_HEIGHT } = Dimensions.get("window");
  const navigation = useNavigation();
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const res = await axios.get(BASE_URL + 'getAllProducts');
    if (res?.data?.success == 1) {
      setProducts(res?.data?.data);
    }
  }


  const userDetails = async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      const API_URL = `${BASE_URL}userInfo?token=${token}`
      const res =await  axios.get(API_URL);
      console.log("Data=>",res?.data);
    } catch (err) {
console.log(err);
    }
  }

  useEffect(() => {
    getAllProducts()
    userDetails()

  }, [])




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
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 38,
              flex: 1,
            }}
          >
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder="Search " />
          </Pressable>
          <Feather name="mic" size={24} color="black" />
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            padding: 10,
            backgroundColor: "#ed837e",
          }}
        >
          <Entypo name="location-pin" size={24} color="black" />

          <Pressable>
            <Text style={{ fontSize: 13, fontWeight: 500 }}>
              Deliver to this address
            </Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              gap: 10,
              justifyContent: "space-around",
              marginLeft: 10,
              marginRight: 10
            }}
          >
            {CategoryImages.map((item, i) => {
              return (
                <Pressable
                  onPress={() => navigation.navigate("ProductSearch")}
                  key={i}
                  style={{
                    width: 100,
                    borderColor: "#a6a3a2",
                    borderWidth: 1,
                    borderRadius: 6,
                    padding: 15,
                  }}
                >
                  <Image
                    style={{ width: 60, height: 70, resizeMode: 'contain', }}
                    source={{ uri: item?.image }}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    {item?.title}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>



        <FlatList
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          data={SliderImages}
          renderItem={({ item }) => {
            return (
              <View>
                <Image
                  style={{ width: 400, height: 200, marginTop: 10 }}
                  source={{ uri: item?.image }}
                />
              </View>
            );
          }}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              gap: 10,
              justifyContent: "space-around",
              marginLeft: 10,
              marginRight: 10,
              borderColor: "black",
            }}
          >
            {ScrollImages.map((item, i) => {
              return (
                <Pressable
                  key={i}
                  onPress={() => navigation.navigate("ProductSearch")}
                  style={{
                    width: 150,
                    backgroundColor: "white",
                    borderRadius: 6,
                    padding: 15,
                    borderWidth: 1,
                    borderColor: "#a6a3a2"
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 6 }}>

                    <Image
                      style={{ width: 35, height: 10 }}
                      source={item?.image}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: 13,
                        fontWeight: "bold",
                      }}
                    >
                      {item?.title}
                    </Text>
                  </View>

                </Pressable>
              );
            })}
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="recommend" size={24} color="black" />
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Recommended
            </Text>
          </View>
          <View>
            <Text>See more</Text>
          </View>
        </View>
        {/* -----products grid ---- */}
        <View
          style={{
            // backgroundColor: "yellow",
            padding: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >
          {products?.map((item, i) => (
            <Pressable
              onPress={() => navigation.navigate("ProductDetail", { data: item })}
              key={item?._id}
              style={{
                width: (WIN_WIDTH - 80) * 0.5,
                // backgroundColor: "red",
                borderWidth: .8,
                borderRadius: 0,
                borderColor: "#000000",
                height: 270,
                marginHorizontal: 10,
                marginTop: 20
              }}
            >
              <View style={{ width: "100%", height: "60%", marginTop: 20 }}>
                <Image source={{ uri: item?.image }} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
              </View>
              <View style={{ width: "100%", height: "40%", paddingHorizontal: 10, paddingTop: 20, }}>
                <Text numberOfLines={1} style={{ fontSize: 17, fontWeight: 'bold' }}>{item?.title}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>£ {item?.price}</Text>
                <Text style={{ fontSize: 14, marginTop: 5 }}>{("⭐⭐⭐⭐⭐").slice(0, item?.rating)} {item?.rating}/5</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
