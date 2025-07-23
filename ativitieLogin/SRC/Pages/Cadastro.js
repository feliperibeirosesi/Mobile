import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
// import * as SQLite from "expo-sqlite"; // Comentado: relacionado ao banco de dados

import { styles } from "../JS/styles";
// Importando páginas
import Login from "./Login";

// --- INÍCIO: Código relacionado ao banco de dados ---
// // Abrir o banco
// const db = SQLite.openDatabase({
//   name: "meuBancoDeDados.db",
//   location: "default",
// });

// // Criar a tabela uma vez
// db.transaction((tx) => {
//   tx.executeSql(
//     "CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)",
//     [],
//     () => {
//       console.log("Tabela usuarios criada com sucesso");
//     },
//     (error) => {
//       console.error("Erro ao criar tabela usuarios", error);
//     }
//   );
// });
// --- FIM: Código relacionado ao banco de dados ---

export default function CadastroScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // --- INÍCIO: Função relacionada ao banco de dados ---
  // // Função para inserir usuário (agora dentro da tela, com acesso aos estados)
  // const insertUser = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "INSERT INTO usuarios (email, password) VALUES (?, ?)",
  //       [email, senha],
  //       () => {
  //         console.log("Usuário inserido com sucesso");
  //         setEmail("");
  //         setSenha("");
  //         setConfirmarSenha("");
  //       },
  //       (error) => {
  //         console.error("Erro ao inserir usuário", error);
  //       }
  //     );
  //   });
  // };
  // --- FIM: Função relacionada ao banco de dados ---

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.container1}>
        <Image
          style={styles.Image1}
          source={require("../IMG/56fdb3e8-a59d-4a5b-b75c-dbad4a2ada37.png")}
        />
        <Text style={styles.title}>Cadastre-se</Text>
      </View>

      {/* Formulário */}
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

        {/* Botão Enviar */}
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
            if (senha === confirmarSenha) {
              // insertUser(); // Comentado: relacionado ao banco de dados
              console.log("Usuário cadastrado com sucesso!");
              navigation.navigate("Login");
            } else {
              console.log(
                "As senhas não coincidem. Por favor, tente novamente."
              );
              setSenha("");
              setConfirmarSenha("");
            }
          }}
        >
          <Text style={{ fontSize: 20 }}>Enviar</Text>
        </TouchableOpacity>

        {/* Link para Login */}
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
          onPress={() => navigation.goBack("Login")}
        >
          <Text style={{ fontSize: 20, color: "blue" }}>Já tem uma conta?</Text>
        </TouchableOpacity>

        {/* Ícones de redes sociais */}
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
