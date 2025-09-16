import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "../JS/styles";

import CadastroScreen from "./Cadastro";
import Home from "./Home";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState("");
  const [emailValido, setEmailValido] = useState(false);

  const modfText = (newText) => {
    setEmail(newText);

    setEmailValido(true);
    setErrors("");
    if (
      newText.includes("@gmail" || "@outlook" || "@yahool") &&
      newText.includes(".com")
    ) {
    } else {
      setEmailValido(false);
      setErrors("Email inválido");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.Image1}
          source={require("../IMG/56fdb3e8-a59d-4a5b-b75c-dbad4a2ada37.png")}
        />
        <Text style={styles.title}>Bem-vindo(a)</Text>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={{
            borderBottomColor: "#999",
            width: 250,
            borderWidth: 1,
            position: "absolute",
            top: 60,
            borderRadius: 10,
          }}
          value={email}
          onChangeText={modfText}
          returnKeyType="done"
          placeholder="Email"
          placeholderTextColor="#FFF"
          color="#FFF"
        />
        {errors ? (
          <Text style={styles.error}>{errors}</Text> // Exiba aqui, fora do botão
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
          onPress={() => {
            if (emailValido && senha) {
              navigation.navigate("Home");
            } else {
              setErrors("Preencha todos os campos corretamente");
            }
          }}
        >
          {errors ? <Text style={styles.error}>{errors}</Text> : null}
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
            navigation.navigate("Cadastro");
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
              source={require("../IMG/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../IMG/facebook.webp")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 40, height: 40, borderRadius: 10 }}
              source={require("../IMG/x.webp")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}
