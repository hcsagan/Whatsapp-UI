import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import people from "../../../people.json";
import Avatar from "../../components/Avatar";
import Row from "../../components/Row";

const Chat = ({ data }) => (
  <Row paddingHorizontal={8}>
    <Avatar medium source={{ uri: data.picture.large }} />
    <View
      flex={1}
      justifyContent="center"
      marginLeft={10}
      paddingLeft={10}
      borderBottomWidth={StyleSheet.hairlineWidth}
      borderColor="#ddd"
    >
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{data.name.first}</Text>
      <Text style={{ color: "#999" }}>Bilmiyom</Text>
    </View>
  </Row>
);

export default function Chats({ navigation: { navigate } }) {
  const navigator = React.useCallback((route) => navigate(route), []);
  return (
    <ScrollView>
      {people.map((item, index) => (
        <TouchableOpacity onPress={() => navigator("Splash")} key={index.toString()}>
          <Chat data={item} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 35,
    width: 70,
    height: 70,
  },
});
