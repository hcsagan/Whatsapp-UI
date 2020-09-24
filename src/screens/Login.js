import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Picker,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useIsFocused, useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import countries from "../data/countries.json";
import RNPickerSelect from "react-native-picker-select";
import { TouchableOpacity } from "react-native-gesture-handler";
import BallButton from "../components/BallButton";
import Input from "../components/Input";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../themeConfig";

const countryData = countries.map((item) => ({ label: item.name, value: item.dial_code }));

export default function Login({ navigation: { navigate } }) {
  const colors = useTheme();
  const [country, setCountry] = useState();
  const focused = useIsFocused();
  return (
    <ScrollView style={styles.container}>
      {/* <RNPickerSelect
        items={countryData}
        onValueChange={(value) => {
          setCountry(value);
        }}
      /> */}
      <Text style={{ color: colors.text }}>
        WhatsUpp will send an SMS message to verify your phone number. Enter your country code and
        phone number.
      </Text>
      <View flexDirection="row" alignItems="center">
        <Text style={{ fontSize: 24, color: "#ccc" }}>+</Text>
        <Input value="90" />
        <Input flex={1} placeholder="Phone Number" />
        <BallButton onPress={() => navigate("Register")}>
          <MaterialCommunityIcons name="arrow-right" size={24} color="white" />
        </BallButton>
      </View>
    </ScrollView>
  );
}
