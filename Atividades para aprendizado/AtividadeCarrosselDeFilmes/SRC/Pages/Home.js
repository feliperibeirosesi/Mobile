import { StatusBar } from "expo-status-bar";
import HomeStyle from "../Style/HomeStyle";

import { View, Text, TouchableOpacity } from "react-native";
import { getName } from "../Components/AsyncStorage";
import { removeName } from "../Components/AsyncStorage";

import Carrosel from "./Carrosel";

export default function Home({ navigation }) {
  return (
    <View style={HomeStyle.container}>

      <Text style={{ color: "white", fontSize: 30, bottom: 30 }}>Olá {getName()}, Seja bem vindo</Text>

      <TouchableOpacity style={HomeStyle.Button} onPress={() => navigation.navigate("Carrosel")} >
        <View style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10 }}>
          <Text style={{ color: 'white' }}>Ver Filme</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        removeName()
        navigation.goBack()
      }
      }>
        <View style={{ backgroundColor: 'red', padding: 10, borderRadius: 10 }}>
          <Text style={{ color: 'white' }}>Log-out</Text>
        </View>
      </TouchableOpacity>
      <StatusBar hidden />
    </View >

  );
}
