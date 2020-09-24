import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, PanGestureHandler, State } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { usePanGestureHandler } from "react-native-redash";
import Animated, { useCode, useValue } from "react-native-reanimated";
import people from "../../../people.json";
import Avatar from "../../components/Avatar";
import Row from "../../components/Row";

const Chat = ({ data, navigate }) => {
  // const { gestureHandler, state, translation } = usePanGestureHandler();
  return (
    <Swipeable onSwipeableLeftWillOpen={() => console.log("sa")}>
      <TouchableOpacity onPress={() => navigate("Splash")}>
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
      </TouchableOpacity>
    </Swipeable>
  );
};

export default function Chats({ navigation: { navigate } }) {
  const navigator = React.useCallback((route) => navigate(route), []);
  const swipe = useValue(State.UNDETERMINED);
  useCode(() => {}, []);
  return (
    <ScrollView>
      {people.map((item, idx) => (
        <Chat data={item} key={idx.toString()} navigate={navigator} />
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
