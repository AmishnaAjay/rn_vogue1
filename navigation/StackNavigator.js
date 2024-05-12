import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegScreen from "../screens/RegScreen";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProductDetail from "../screens/ProductDetail";
import Otp from "../screens/Otp";
import Buy from "../screens/Buy";
import AddToCart from "../screens/AddToCart";
import AddAddress from "../screens/AddAddress";
import Payment from "../screens/Payment";
import ProductSearch from "../screens/ProductSearch";
import SplashScreen from "../screens/SplashScreen";
import AddressForm from "../screens/AddressForm";
import ProfilePage from "../screens/ProfilePage";
import Cart from "../screens/Cart";
import Wishlist from "../screens/Wishlist";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#d6807a" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="home" size={24} color="#d6807a" />
              ) : (
                <Ionicons name="home-outline" size={24} color="#d6807a" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#d6807a" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#d6807a" />
              ) : (
                <Ionicons name="person-outline" size={24} color="#d6807a" />
              ),
          }}
        />

<Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarLabel: "Wishlist",
            tabBarLabelStyle: { color: "#d6807a" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="heart" size={24} color="#d6807a" />
              ) : (
                <Ionicons name="heart-outline" size={24} color="#d6807a" />
              ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { color: "#d6807a" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="cart" size={24} color="#d6807a" />
              ) : (
                <Ionicons name="cart-outline" size={24} color="#d6807a" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
         name="Otp"
         component={Otp}
         options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Buy"
          component={Buy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddToCart"
          component={AddToCart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressForm"
          component={AddressForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductSearch"
          component={ProductSearch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
