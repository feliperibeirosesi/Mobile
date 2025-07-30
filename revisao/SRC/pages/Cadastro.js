import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../JS/style';
import { BlurView } from 'expo-blur';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import Input from '../Components/Input';

export default function Cadastro({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function nameValue(value) {
    console.log(value);

    setName(value);
  }
  function emailValue(value) {
    console.log(value);

    setEmail(value);
  }

  function passwordValue(value) {
    console.log(value);

    setPassword(value);
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
            <Input
              estilo={styles.Input}
              placeholder="Nome"
              placeholderTextColor={"#af99c4"}
              valor={name}
              funcao={nameValue} />
            <Input
              estilo={styles.Input}
              placeholder="Email"
              placeholderTextColor={"#af99c4"}
              valor={email}
              funcao={emailValue} />

            <Input
              estilo={styles.Input}
              placeholder="Senha"
              password={true}
              valor={password}
              funcao={passwordValue} />



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

              }}
              onPress={() => { console.log() }}>
              <Text style={{ fontSize: 20 }}>Cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
      <StatusBar hidden />
    </ImageBackground >
  );
}
