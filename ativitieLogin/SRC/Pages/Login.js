import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from "./SRC/JS/styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.Image1}
          source={require("./SRC/IMG/56fdb3e8-a59d-4a5b-b75c-dbad4a2ada37.png")}
        />
        <Text style={styles.title}>Cadastre-se</Text>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={{
            borderBottomColor: "#999",
            width: 250,
            borderWidth: 1,
            position: "absolute",
            top: 20,
            borderRadius: 10,
          }}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#FFF"
        />
        <TextInput
          style={{
            borderBottomColor: "#999",
            width: 250,
            borderWidth: 1,
            position: "absolute",
            top: 100,
            borderRadius: 10,
          }}
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          placeholderTextColor="#FFF"
        />
        <TextInput
          style={{
            borderBottomColor: "#999",
            width: 250,
            borderWidth: 1,
            position: "absolute",
            top: 180,
            borderRadius: 10,
          }}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          placeholder="Confirmar Senha"
          placeholderTextColor="#FFF"
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
        >
          <Text style={{ fontSize: 20 }}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "transparent",
            height: 30,
            width: 150,
            position: "absolute",
            bottom: 110,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ fontSize: 20, color: "blue" }}>Já tem login?</Text>
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
              source={require("./SRC/IMG/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("./SRC/IMG/facebook.webp")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 40, height: 40, borderRadius: 10 }}
              source={require("./SRC/IMG/x.webp")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}

