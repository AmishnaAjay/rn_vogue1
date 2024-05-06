import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../app/config";
import axios from "axios";

const RegScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigation = useNavigation();
  
  const handleRegister = () => {
    // Send a POST request to your backend endpoint
    axios.post((BASE_URL + 'register'), {
      first_name: firstName,
      last_name: lastName,
      dob: dob,
      password: password,
      email: email
    })
    .then(response => {
      // Registration successful
      navigation.navigate("Main")
      console.log('Registration successful:', response.data);
      setSuccess(true);
      setError(null);
    })
    .catch(error => {
      // Registration failed
      console.error('Registration error:', error.response.data);
      setError(error.response.data.message);
      setSuccess(false);
    });
  };
   
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={require('../assets/Vogue.png')}
        />
      </View>

      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#041E42",
            }}
          >
            Create your account
          </Text>
        </View>

        <View >
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
            <Ionicons name="person" size={24} color="gray" style={{marginLeft: 10}}/>

            <TextInput
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: firstName ? 16 : 16,
              }}
              placeholder="Enter your first name"
            />
          </View>
        </View>

        <View >
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
            <Ionicons name="person" size={24} color="gray" style={{marginLeft: 10}}/>

            <TextInput
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: lastName ? 16 : 16,
              }}
              placeholder="Enter your last name"
            />
          </View>
        </View>

        <View >
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
            <Ionicons name="person" size={24} color="gray" style={{marginLeft: 10}}/>

            <TextInput
              value={dob}
              onChangeText={(text) => setDob(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: dob ? 16 : 16,
              }}
              placeholder="Enter your dob"
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
            <MaterialIcons
              style={{ marginLeft: 10 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter your email"
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
            <FontAwesome
              style={{ marginLeft: 10 }}
              name="lock"
              size={24}
              color="gray"
            />

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="Enter your password"
            />
          </View>
        </View>

        <View style={{ marginTop: 30 }} />

        <Pressable
         onPress={handleRegister}
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
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{
            marginTop: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Already have an account? Sign in
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegScreen;

const styles = StyleSheet.create({});
