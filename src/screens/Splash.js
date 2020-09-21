import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useIsFocused } from "@react-navigation/native";

const colors = ["#00000099", "transparent", "transparent"];

export default function Splash({ navigation: { navigate } }) {
  const focused = useIsFocused();
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBg} source={require("../../assets/chatbg.jpg")}>
        <LinearGradient style={[styles.container, styles.top]} colors={colors}>
          <View style={[styles.container, styles.top]}>
            <View>
              <Image source={require("../../assets/wp-logo.png")} style={styles.wpLogo} />
            </View>
            <Text style={[styles.text, styles.welcomeText]}>Welcome to WhatsUpp</Text>
          </View>
        </LinearGradient>
        <View style={{ padding: 25 }}>
          <Text style={[styles.text, styles.agreement]}>
            Tap "Agree and continue" to accept the
            <Text onPress={() => alert("sa")} style={{ color: "#35eada" }}>
              {" WhatsUpp Terms of Service and Privacy Policy."}
            </Text>
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={styles.accept}
          activeOpacity={0.7}
        >
          <Text style={[styles.text, styles.footerText]}>Agree and continue</Text>
        </TouchableOpacity>
      </View>

      {Platform.OS === "ios" && focused && <StatusBar barStyle="light-content" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    alignItems: "center",
    justifyContent: "center",
  },
  wpLogo: {
    width: Dimensions.get("window").width * 0.33,
    height: Dimensions.get("window").width * 0.33,
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  welcomeText: {
    fontSize: 24,
  },
  imageBg: {
    flex: 1,
  },
  text: {
    color: "white",
  },
  footer: {
    borderTopWidth: 8,
    borderTopColor: "#34af23",
    backgroundColor: "#596169",
    padding: 12,
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
  },
  accept: {
    width: Dimensions.get("window").width * 0.7,
    backgroundColor: "#31383e",
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 2,
    alignItems: "center",
  },
  agreement: {
    fontSize: 13,
    textAlign: "center",
  },
});
