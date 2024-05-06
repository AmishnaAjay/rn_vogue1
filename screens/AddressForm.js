import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  Image
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../app/config";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AddressForm = () => {
  const [name, setName] = useState("");
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [local, setLocal] = useState("");
  const [postcode, setPostcode] = useState("");

  const navigation = useNavigation();

  const handleAdd = async () => {
    // Send a POST request to your backend endpoint
    const token = await AsyncStorage.getItem('token')
    axios.post((BASE_URL + 'addAddress?token=' + token), {
        addressees_name: name,
        house_number: house,
        street_name: street,
        locality_name: local,
        postcode: postcode
    })
    .then(response => {
      // Registration successful
      navigation.navigate("AddAddress")
      console.log('Added successfully:', response.data);
      setSuccess(true);
      setError(null);
    })
    .catch(error => {
      // Registration failed
      console.error('Failed to add:', error.response.data);
      setError(error.response.data.message);
      setSuccess(false);
    });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
    >
      <ScrollView>

      <View
          style={{
            backgroundColor: "white",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => navigation.navigate("Buy")}>
            <Ionicons name="arrow-back" size={24} color="#d6807a" />
          </Pressable>
          <Text
            style={{
              marginLeft: 20,
              color: "#d6807a",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Shipping Address Details
          </Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 30}}>
            <Image  
            style={{ width: 150, height: 100 }}
            source={{uri: "data:image/png;base64,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"}}/>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D0D0D0",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >

            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
                marginLeft: 10
              }}
              placeholder="Enter your name"
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D0D0D0",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >

            <TextInput
              value={house}
              onChangeText={(text) => setHouse(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: house ? 16 : 16,
                marginLeft: 10
              }}
              placeholder="House number"
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D0D0D0",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >

            <TextInput
              value={street}
              onChangeText={(text) => setStreet(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: street ? 16 : 16,
                marginLeft: 10
              }}
              placeholder="street name"
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D0D0D0",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >

            <TextInput
              value={local}
              onChangeText={(text) => setLocal(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: local ? 16 : 16,
                marginLeft: 10
              }}
              placeholder="locality name"
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D0D0D0",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >

            <TextInput
              value={postcode}
              onChangeText={(text) => setPostcode(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: postcode ? 16 : 16,
                marginLeft: 10
              }}
              placeholder="postcode"
            />
          </View>
        </View>

        <View style={{ marginTop: 30 }} />

        <Pressable
          onPress={handleAdd}
          style={{
            width: 200,
            backgroundColor: "#d6807a",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Add
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressForm;
