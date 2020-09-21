import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "../../themeConfig";
import BallButton from "../components/BallButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Input from "../components/Input";

export default function Register({ navigation: { navigate } }) {
  return (
    <ScrollView style={styles.container}>
      <Text>WhatsUpp sent you the verification code via SMS. Please enter the code below.</Text>

      <View flexDirection="row" alignItems="center">
        <Input flex={1} placeholder="Verification Code" />
        <BallButton onPress={() => navigate("Home")}>
          <MaterialCommunityIcons name="arrow-right" size={24} color="white" />
        </BallButton>
      </View>
    </ScrollView>
  );
}
