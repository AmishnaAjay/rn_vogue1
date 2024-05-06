import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Logo } from "../assets";
import AsyncStorage from "@react-native-async-storage/async-storage";


const SplashScreen = ({ navigation }) => {


  const verifyUser = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token != null || token != undefined || token != ""){
      navigation.navigate("Home");
    }else{
      navigation.navigate('Login');
    }

  }

  useEffect(() => {
    setTimeout(() => {
      verifyUser()
        

    }, 800)

  }, [])



  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
      <Image source={Logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
