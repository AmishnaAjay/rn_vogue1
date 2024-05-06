import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import { BASE_URL } from "../app/config";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AddAddress = () => {

    const navigation = useNavigation();
    const [address, setAddress] = useState();
    const [deleted, setDeleted] = useState(false);

    const getAllAddress = async () => {
      const token = await AsyncStorage.getItem('token')
      const res = await axios.get(BASE_URL + 'getAddress?token=' + token);
      if(res?.data?.success == 1){
        setAddress(res?.data?.data);
      }
    }

    const deleteAddress = async (addressIdToDelete) => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/api/address/${addressIdToDelete}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        })
        .then(async(response) =>  {
          console.log('deleted Successfully', response.data);
          getAllAddress();
        })
      } catch (error) {
        console.error('Error deleting address:', error);
      }
    };
    
    const editAddress = async (addressIdToUpdate, updatedAddressData) => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/api/address/${addressIdToUpdate}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
          body: JSON.stringify(updatedAddressData), // Convert data to JSON string
        });
    
        if (response.ok) {
          const responseData = await response.json();
          console.log('Address updated successfully:', responseData);
          // Optionally, navigate back to a previous screen or perform any other actions
        } else {
          console.error('Failed to update address:', response.status);
        }
      } catch (error) {
        console.error('Error updating address:', error);
      }
    };

    useEffect(() => {
       getAllAddress();
      
    }, []);
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
            Address
          </Text>
        </View>
        <ScrollView>
          <Pressable
          onPress={() => {navigation.navigate("AddressForm")}}>
            <View
              style={{ margin: 20, backgroundColor: "#d6807a", padding: 20 }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                + Add New Address
              </Text>
            </View>
          </Pressable>
          <View
            style={{
              backgroundColor: "white",
             
              width: 350,
              margin: 20

            }}
          >
            {address?.map((item, i) => (
              <View style={{ flexDirection: "row", paddingTop: 15,  borderRadius: 10,
              borderColor: "#d6807a",
              borderWidth: 1, marginTop: 10}}  key={item?._id}>
              <View style={{ gap: 10, padding: 20 }}
               
              >
                <Text style={{ color: "#d6807a", fontWeight: "bold", marginBottom: 20 }}>
                {item?.addressees_name}
                </Text>
                <Text style={{ color: "#d6807a" }}>{item?.house_number} {item?.street_name}</Text>
                <Text style={{ color: "#d6807a" }}>{item?.locality_name}</Text>
                <Text style={{ color: "#d6807a" }}>{item?.postcode}</Text>
              </View>
              <Pressable  
              onPress={ () => navigation.navigate("")}>
              <View style={{  marginLeft: 100, marginTop: 17, flexDirection: "row" }}>
               <Pressable onPress={() => deleteAddress(item?._id)}><MaterialIcons name="delete" size={24} color="#d6807a" /></Pressable> 
              <Pressable onPress={() => editAddress(item?._id)}><MaterialIcons name="edit" size={24} color="#d6807a" /></Pressable>
              </View>
 
              </Pressable>
            </View>
            ))}
            
          </View>
            
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
 
export default AddAddress;

const styles = StyleSheet.create({});
