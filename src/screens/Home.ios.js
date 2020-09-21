import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calls from "./tabs/Calls";
import Stories from "./tabs/Stories";
import Camera from "./tabs/Camera";
import Chats from "./tabs/Chats";
import Settings from "./tabs/Settings";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const tabBarIcon = ({ focused, color, size }, route) => {
  let iconName;

  if (route.name === "Home") {
    iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
  } else if (route.name === "Settings") {
    iconName = focused ? "ios-list-box" : "ios-list";
  }

  // You can return any component that you like here!
  return <Ionicons name={iconName} size={size} color={color} />;
};

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Stories":
              iconName = "ios-disc";
              break;
            case "Calls":
              iconName = "ios-call";
              break;
            case "Camera":
              iconName = "ios-camera";
              break;
            case "Chats":
              iconName = "ios-chatbubbles";
              break;
            case "Settings":
              iconName = "ios-cog";
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Stories" component={Stories} />
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
