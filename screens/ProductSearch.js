import { 
    View,
    Text,
    SafeAreaView,
    Platform,
    ScrollView,
    Pressable,
    TextInput,
    Image,
    Dimensions
    } from "react-native";
import React, {useState, useEffect} from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {  RecommendedImages, ScrollImages } from "../assets/data/data";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../app/config";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductSearch = () => {
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
         <View
          style={{
            backgroundColor: "#d6807a",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable 
           onPress={() => navigation.navigate("Main")}
           >
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
          
        </View>
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
                <View style={{flexDirection:"row", gap: 6}}>

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
                height: 250,
                marginHorizontal: 10,
                marginTop: 20
              }}
            >
              <View style={{ width: "100%", height: "60%" }}>
                <Image source={{ uri: item?.image }} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
              </View>
              <View style={{ width: "100%", height: "40%", paddingHorizontal: 10, paddingTop: 20 }}>
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

export default ProductSearch;
