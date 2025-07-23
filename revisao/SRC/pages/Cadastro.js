import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../JS/style';
import { BlurView } from 'expo-blur';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';

export default function Cadastro({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function testFuncao(value) {
    console.log(value);

    if (value != "") {
      console.log("ESTOUAQUI!")
    }

    setName(value);
  }
  return (
    <ImageBackground
      style={styles.background}
      source={require("../IMG/MinecraftAesthetic.jpg")}
    >
      <BlurView intensity={70} tint="dark" style={styles.CadastroBlur}>
        <View style={styles.menuCadastro}>

          <View style={styles.headerCadastro}>
            <Feather name="headphones" size={74} color="#cfbea7" />
            <Text style={styles.tituloCadastro}>Cadastro</Text>
            <Text style={styles.subtituloCadastro}>
              Cadastre-se agora para ouvir suas músicas sem preocupações.
            </Text>
          </View>
          <View style={styles.inputsCadastro}>
            <TextInput
              style={styles.Input}
              placeholder="Nome"
              placeholderTextColor={"#af99c4"}
              value={name}
              onChangeText={testFuncao} />
            <TextInput
              style={styles.Input}
              placeholder="Email"
              placeholderTextColor={"#af99c4"}
              value={email}
              onChangeText={setEmail} />

            <TextInput
              style={styles.Input}
              placeholder="Senha"
              placeholderTextColor={"#af99c4"}
              value={password}
              onChangeText={setPassword} />

          </View>
          <View style={styles.buttonCadastro}>
            <TouchableOpacity
              style={{
                backgroundColor: "#a18b9e",
                padding: 5,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10
              }}>
              <Text style={{ fontSize: 20 }}>Cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
      <StatusBar hidden />
    </ImageBackground >
  );
}
