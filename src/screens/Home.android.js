import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableNativeFeedback } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calls from "./tabs/Calls";
import Stories from "./tabs/Stories";
import Camera from "./tabs/Camera";
import Chats from "./tabs/Chats";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { HeaderBackButton } from "@react-navigation/stack";
import { HeaderOptions } from "../../themeConfig";
import styled from "styled-components/native";
const Tab = createMaterialTopTabNavigator();
const IconBtn = styled.TouchableOpacity.attrs({ activeOpacity: 0.9 })`
  margin-right: 16px;
  background-color: ${HeaderOptions.headerStyle.backgroundColor};
`;
export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View flexDirection="row">
          <IconBtn>
            <MaterialIcons name="search" size={24} color="white" />
          </IconBtn>
          <IconBtn>
            <MaterialIcons name="chat" size={24} color="white" />
          </IconBtn>
          <IconBtn>
            <MaterialIcons name="more-vert" size={24} color="white" />
          </IconBtn>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: HeaderOptions.headerStyle,
        labelStyle: { color: "white", fontWeight: "bold" },
        indicatorStyle: { backgroundColor: "white", height: 3 },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // You can return any component that you like here!
          return route.name === "Camera" ? (
            <MaterialIcons name="camera-alt" size={16} color="white" />
          ) : (
            false
          );
        },
      })}
    >
      <Tab.Screen name="Stories" component={Stories} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Calls" component={Calls} />
      {/* <Tab.Screen name="Settings" component={Settings} /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
