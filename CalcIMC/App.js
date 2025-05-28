// Importação dos componentes principais do React Native e outros recursos
import { StatusBar } from 'expo-status-bar'; // Barra de status do Expo
import { Text, View, TextInput, Button, Modal, Pressable } from 'react-native'; // Componentes visuais
import { styles } from "./styles/style"; // Importa os estilos personalizados
import { useState } from 'react'; // Hook para gerenciar estado

// Função principal do app
export default function App() {
  // Estados para armazenar os valores digitados pelo usuário
  const [peso, setPeso] = useState(""); // Armazena o peso
  const [altura, setAltura] = useState(""); // Armazena a altura
  const [modalvisibility, setModalVisibility] = useState(false); // Controla visibilidade do modal

  // Cálculo do IMC (Índice de Massa Corporal)
  const IMC = parseFloat(peso) / parseFloat(altura) ** 2;

  // Retorno da interface visual do app
  return (
    <View style={styles.container}> {/* Container principal da tela */}


      <Text style={{ fontSize: 20, position: "absolute", top: 180 }}>Calcular IMC</Text>

      <View style={styles.menuContainer}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu peso'
          value={peso}
          onChangeText={(value) => setPeso(value)} // Atualiza o estado 'peso'
        />
        <TextInput
          style={styles.input}
          placeholder='Digite sua altura'
          value={altura}
          onChangeText={(value) => setAltura(value)} // Atualiza o estado 'altura'
        />


        <Button
          title='Abrir Modal'
          onPress={() => setModalVisibility(!modalvisibility)} // Alterna a visibilidade do modal
        />


        <Modal transparent={true} visible={modalvisibility} animationType='fade'>
          <View style={styles.modalContainer}>
            <View style={styles.modalMenu}>


              <Pressable
                onPress={() => setModalVisibility(false)}
                style={{ position: 'absolute', left: "88%", top: 10 }}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>X</Text>
              </Pressable>


              {
                IMC < 18.5 ? (
                  <Text style={styles.text}>Abaixo do peso {IMC.toFixed(2)}</Text>
                ) : IMC <= 24.9 ? (
                  <Text style={styles.text}>Peso ideal {IMC.toFixed(2)}</Text>
                ) : IMC <= 29.9 ? (
                  <Text style={styles.text}>Excesso de peso {IMC.toFixed(2)}</Text>
                ) : IMC <= 30.9 ? (
                  <Text style={styles.text}>Obesidade {IMC.toFixed(2)}</Text>
                ) : IMC >= 31 ? (
                  <Text style={styles.text}>Obesidade extrema {IMC.toFixed(2)}</Text>
                ) : null
              }

            </View>
          </View>
        </Modal>

      </View>

      <StatusBar hidden={true} />
    </View>
  );
}
