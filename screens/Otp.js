import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import {React, useState} from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Otp = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
    >
      <View style={{ marginTop: 30 }}>
        <Image
          style={{ width: 150, height: 100 }}
          source={require("../assets/Vogue.png")}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Verify your phone number
          </Text>
        </View>

        <View style={{ marginTop: 30, alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D0D0D0",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
              width: 300,
            }}
          >
            <Entypo
              name="phone"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />

            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 200,
                fontSize: name ? 16 : 16,
              }}
              placeholder="Enter your phone number"
            />
          </View>

          <View style={{ marginTop: 30, width: 300 }}>
            <Text style={{ fontSize: 15 }}>
              By continuing, I agree to the
              <Text style={{ fontSize: 15, color: "#d6807a" }}>
                {" "}
                Terms of Use & Privacy Policy
              </Text>
            </Text>
          </View>

          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{
              width: 300,
              backgroundColor: "#d6807a",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 30,
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
              Continue
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({});
