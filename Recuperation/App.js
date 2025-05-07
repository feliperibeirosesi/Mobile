import { StatusBar } from "expo-status-bar";
// Importa o hook useState para manipular o estado (armazenar o texto digitado)
import { useState } from "react";

// Importa os componentes do React Native
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

// Componente principal do aplicativo
export default function App() {
  // Cria uma variável de estado chamada 'text' e a função 'setText' para atualizá-la
  const [text, setText] = useState("");

  // Função chamada toda vez que o usuário digita no TextInput
  const changeText = (value) => {
    console.log("Texto digitado:", value); // Mostra o valor digitado no console
    setText(value); // Atualiza o estado com o texto digitado
  };

  // Renderiza a interface
  return (
    // Componente que usa uma imagem como fundo da tela
    <ImageBackground
      source={require("./SRC/Assets/IMG/teste.jpg")} // Caminho da imagem
      style={styles.background} // Estilo do fundo
    >
      {/* Container que organiza os campos no centro */}
      <View style={styles.container}>
        {/* Primeiro campo de texto com várias configurações */}
        <TextInput
          style={styles.input} // Estilo aplicado
          placeholder="Digite seu nome" // Texto que aparece quando está vazio
          placeholderTextColor={"violet"} // Cor do placeholder
          inputMode="numeric" // Mostra teclado numérico
          autoCapitalize="characters" // Coloca letras em maiúsculas
          multiline={true} // Permite múltiplas linhas
          secureTextEntry={true} // Esconde o texto (tipo senha)
          onChangeText={changeText} // Chama a função ao digitar
        />
        {/* Segundo campo de texto apenas com estilo visual */}
        {/* <TextInput style={styles.input2} /> */}
        {/* <Button>

        </Button> */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log("Você clicou no botão")}
        >
          <Text style={styles.txtBtn}>Me aperte</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

// Estilos usados no app
const styles = StyleSheet.create({
  background: {
    flex: 1, // Ocupa a tela toda
    resizeMode: "cover", // A imagem cobre toda a tela
    justifyContent: "center", // Centraliza conteúdo na vertical
    alignItems: "center", // Centraliza conteúdo na horizontal
  },
  container: {
    flex: 1, // Ocupa o espaço restante
    alignItems: "center", // Centraliza horizontalmente
    justifyContent: "center", // Centraliza verticalmente
  },
  input: {
    borderWidth: 0, // Sem borda externa
    borderBottomWidth: 1, // Apenas linha inferior
    padding: 10, // Espaçamento interno
    width: 300, // Largura do campo
  },
  input2: {
    borderWidth: 0,
    textAlign: "center", // Centraliza o texto digitado
    marginTop: 50, // Espaçamento acima
    width: 250,
    padding: 10,
    borderRadius: 15, // Arredonda os cantos
    shadowColor: "#000", // Cor da sombra
    shadowOffset: { width: 2, height: 2 }, // Direção da sombra
    shadowOpacity: 0.3, // Transparência da sombra
    shadowRadius: 2, // Suavidade da sombra
    backgroundColor: "#149bad", // Cor de fundo
  },
  btn: {},
  txtBtn: {},
});
