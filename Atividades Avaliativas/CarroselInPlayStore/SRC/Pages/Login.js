import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import LoginStyles from "../Style/LoginStyle";

import { useEffect } from "react";

import { saveName } from "../Components/AsyncStorage";

import Home from "../Pages/Home";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMSG, setErrorMSG] = useState("");

  const BDName = async () => {
    if (name && senha) {
      try {
        await saveName(name)
        navigation.navigate("Home");
      } catch (error) {
        setErrorMSG("Erro ao salvar nome")
      }
    } else {
      setErrorMSG("Preencha todos os campos corretamente")
    }
  }

  const modfText = (newText) => {
    setName(newText);
    setErrorMSG("");
  };
  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.container1}>
        <Image
          style={LoginStyles.Image1}
          source={require("../Image/56fdb3e8-a59d-4a5b-b75c-dbad4a2ada37.png")}
        />
        <Text style={LoginStyles.title}>Bem-vindo(a)</Text>
      </View>
      <View style={LoginStyles.container2}>
        <TextInput
          style={{
            borderBottomColor: "#999",
            width: 250,
            borderWidth: 1,
            position: "absolute",
            top: 60,
            borderRadius: 10,
          }}
          value={name}
          onChangeText={modfText}
          returnKeyType="done"
          placeholder="Nome"
          placeholderTextColor="#FFF"
          color="#FFF"
        />
        {errorMSG ? (
          <Text style={LoginStyles.error}>{errorMSG}</Text> // Exiba aqui, fora do botão
        ) : null}
        <TextInput
          style={{
            borderBottomColor: "#999",
            width: 250,
            borderWidth: 1,
            position: "absolute",
            top: 160,
            borderRadius: 10,
          }}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          placeholder="Senha"
          placeholderTextColor="#FFF"
          color="#FFF"
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#c1e8ff",
            height: 30,
            width: 100,
            position: "absolute",
            bottom: 170,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={
            BDName
          }
        >
          {errorMSG ? <Text style={LoginStyles.error}>{errorMSG}</Text> : null}
          <Text style={{ fontSize: 20 }}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "transparent",
            height: 30,
            width: 350,
            position: "absolute",
            bottom: 110,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "blue",
            }}
          >
            Ainda não tem uma conta?
          </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            position: "absolute",
            bottom: 50,
            gap: 30,
          }}
        >
          <TouchableOpacity>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../Image/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../Image/facebook.webp")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 40, height: 40, borderRadius: 10 }}
              source={require("../Image/x.webp")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar hidden={true} />
    </View >
  );
}
