import { StyleSheet } from "react-native";

const AndroidHeader = {
  headerStyle: {
    backgroundColor: "#075e54",
  },
  headerTintColor: "white",
};
export const HeaderOptions = {
  headerStyle: Platform.OS === "android" ? AndroidHeader.headerStyle : undefined,
  headerTintColor: Platform.OS === "android" ? "white" : undefined,
};
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  input: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginHorizontal: 10,
  },
});
