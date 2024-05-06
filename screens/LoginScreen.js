import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../app/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native';


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  // const admin_login = 'http://localhost:3000/root/login';

  const handleLogin = () => {
    axios.post((BASE_URL + 'login'), {
      email: email,
      password: password
    })
    .then(async(response) =>  {
      await AsyncStorage.setItem('token',response?.data?.data?.token );
      console.log('Login Successfull', response.data)
      navigation.navigate("Main")
      
    })
    .catch(error => {
      console.error('Login failed', error.response);
      Alert.alert('Login Failed', 'Please check your credentials and try again.');
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

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Log In to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
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
              onChangeText={(text) => setEmail(text?.toLowerCase())}
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

        <View style={{ marginTop: 3 }}>
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

        <View style={{ marginTop: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Keep me logged In</Text>
            <Text style={{ color: "#007FFF", fontWeight: 500 }}>
              Forgot Password?
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 80 }} />

        <Pressable
        onPress={handleLogin}
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
            Login
          </Text>
        </Pressable>

        <Pressable
        onPress={() => navigation.navigate("Otp")}
          style={{
            marginTop: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});