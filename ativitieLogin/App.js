import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./SRC/JS/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.Image1}
          source={require("./SRC/IMG/56fdb3e8-a59d-4a5b-b75c-dbad4a2ada37.png")}
        />
        <Text style={styles.title}>Faça seu Login</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={{
            borderBottomColor: "black",
            width: 150,
            borderWidth: 1,
            position: "absolute",
            top: 0,
            borderRadius: 10,
          }}
          placeholder="Email"
        />
        <TextInput
          style={{
            borderBottomColor: "black",
            width: 150,
            borderWidth: 1,
            position: "absolute",
            top: 80,
            borderRadius: 10,
          }}
          placeholder="Senha"
        />
        <TextInput
          style={{
            borderBottomColor: "black",
            width: 150,
            borderWidth: 1,
            position: "absolute",
            top: 160,
            borderRadius: 10,
          }}
          placeholder="Confirmar Senha"
        />
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View></View>
      <StatusBar hidden={true} />
    </View>
  );
}
