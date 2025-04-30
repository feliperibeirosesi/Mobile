import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: "#1d97f1" }]}>
      {/* <Text style={styles.text}>No me mires começo con ojos</Text> */}
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  text: {
    color: "#cba2ea",
    fontSize: 40,
    textShadowColor: "#101c29",
    textShadowRadius: 20,
    textShadowOffset: { width: 2, height: 1 },
  },
  input: {
    height: 250,
    width: 120,
  },
});
