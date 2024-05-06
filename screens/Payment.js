import { View, Text, KeyboardAvoidingView, Pressable, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView 
    style={{
        paddingTop: Platform.OS == "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
      }}>
    <KeyboardAvoidingView>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable 
           onPress={() => navigation.navigate("Buy")}
           >
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
            Payment Details
          </Text>
        </View>
        <View style={{flexDirection: "column"}}>
            <View style={{width: 400, height: 30, alignItems: "center"}}>
                <Image  
                    style={{ width: 100, height: 100, resizeMode: "contain"}}
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJV8YcDUkmCUc7Qk_UqjpeQVqb6eYes0kQ0w&usqp=CAU' }}
                />
            </View>  

            <View style={{marginLeft: 20}}>
               <Text style={{fontSize: 18, fontWeight: "bold"}}>Add New Card</Text>
            </View>

            <View>
                <TextInput placeholder="Card holder name" style={{marginLeft: 20, borderBottomWidth: 1}} />
            </View>

            <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Card Number</Text>
            </View>
            <View>
                <TextInput placeholder="2345 6789 6754" style={{marginLeft: 20, borderBottomWidth: 1}} />
            </View>
        </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Payment;
