import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  SafeAreaView,
  Pressable,
  Dimensions
} from "react-native";
import React, { useState } from "react";
import { SizeDetails } from "../assets/data/data";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route?.params ?? {};
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const WIN_WIDTH = Dimensions.get('window').width

  // console.log("Data=>",data);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS == "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Main")}
          >
            <Ionicons name="arrow-back" size={24} color="#d6807a" />
          </Pressable>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              backgroundColor: "white",
              shadowColor: "#000000",
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowOffset: {
                height: 1,
                width: 1,
              },
              padding: 50,
            }}
          >
            <Image
              style={{ width: 300, height: 300, backgroundColor: "white" }}
              source={{ uri: data?.image }}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ marginLeft: 18, fontSize: 20, color: "#d6807a" }}>
              {data?.desc}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>£ {data?.price} </Text>
              <Text>{("⭐⭐⭐⭐⭐").slice(0, data?.rating)} {data?.rating}/5</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 25,
              }}
            >
              <View>
                <Text style={{ fontSize: 20, marginLeft: 20 }}>
                  Color: {data?.color}
                </Text>
                <Text style={{ fontSize: 20, marginLeft: 20 }}>Size(UK)</Text>
              </View>
              <View>
                <Text style={{ fontSize: 20, marginLeft: 20 }}>Qty:</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Pressable
                    onPress={() => {
                      if (qty != 1) {
                        setQty(qty - 1)
                      }
                    }}
                    style={[{
                      borderWidth: 1,
                      paddingRight: 10,
                      paddingLeft: 10,
                      borderColor: "gray",
                      backgroundColor: "#e3e8e5",
                    }]}
                  >
                    <Text style={[{ fontSize: 25, textAlign: "center" }, qty == 1 && { opacity: .6 }]}>-</Text>
                  </Pressable>
                  <Pressable style={{
                    borderWidth: 1,
                    paddingRight: 10,
                    paddingLeft: 10,
                    borderColor: "gray",
                    backgroundColor: "#e3e8e5",
                  }} >
                    <Text style={{ fontSize: 20, marginTop: 5 }}>{qty}</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setQty(qty + 1)}
                    style={{
                      borderWidth: 1,
                      paddingRight: 10,
                      paddingLeft: 10,
                      borderColor: "gray",
                      backgroundColor: "#e3e8e5",
                    }}>
                    <Text style={{ fontSize: 25, textAlign: "center" }}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>

          <Pressable style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {data?.size?.map((item, i) => {
              return (
                <Pressable
                  onPress={() => {
                    if (item != size) {
                      setSize(item)
                    } else {
                      setSize("")
                    }
                  }}
                  key={i}
                  style={[{
                    borderWidth: 1,
                    width: 100,
                    height: 30,
                    marginLeft: 20,
                    marginTop: 18,
                    borderRadius: 10,
                    justifyContent: "center",
                  }, item == size && { backgroundColor: 'black' }]}
                >
                  <Text style={[{ textAlign: "center", color: 'black', fontWeight: 'bold' }, item == size && { color: 'white' }]}>{item}</Text>
                </Pressable>
              );
            })}
          </Pressable>
        </View>

        {data?.availability == "Stock Out" ?
          <View style={{ width: "100%", alignItems: 'center', paddingVertical: 20 }}>

            <View style={{ height: 40, width: WIN_WIDTH - 40, backgroundColor: 'lightgrey', borderRadius: 15, justifyContent: 'center' }}>
              <Text
                style={{
                  textAlign: "center",

                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Stock Out
              </Text>
            </View>
          </View>
          : <View style={{ flexDirection: "row", paddingVertical: 20, gap: 15, justifyContent: 'center', }}>
            <View
              style={{
                width: WIN_WIDTH * .42,
                height: 40,
                justifyContent: "center",

                backgroundColor: "#d6807a",
                borderRadius: 15
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("AddToCart")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Add to Cart
                </Text>

              </Pressable>

            </View>
            <View
              style={{
                width: WIN_WIDTH * .42,
                height: 40,
                justifyContent: "center",
                backgroundColor: "#d6807a",
                borderRadius: 15
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("Buy")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Buy Now
                </Text>
              </Pressable>

            </View>
          </View>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
