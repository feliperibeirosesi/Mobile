import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { styles } from "../JS/styles";

export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [IMC, setIMC] = useState(0);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!isNaN(pesoNum) && !isNaN(alturaNum) && alturaNum > 0) {
      const resultado = pesoNum / (alturaNum * alturaNum);
      setIMC(resultado);
      setModalVisibility(true);
    } else {
      alert("Digite valores válidos para peso e altura");
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#b0a9e5",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.menuContainer}>
        <Text
          style={{ position: "absolute", top: 10, fontSize: 20, color: "#fff" }}
        >
          Coloque virgula para separar os valores
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu peso"
          placeholderTextColor="#FFF"
          color="#FFF"
          keyboardType="numeric"
          value={peso}
          onChangeText={(value) => setPeso(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua altura"
          keyboardType="numeric"
          value={altura}
          onChangeText={(value) => setAltura(value)}
          color="white"
          placeholderTextColor="#FFF"
        />

        <TouchableOpacity
          onPress={calcularIMC}
          style={{
            backgroundColor: "#46e8b0",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 16 }}>Calcular IMC</Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={modalVisibility}
          animationType="fade"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalMenu}>
              <Pressable
                onPress={() => setModalVisibility(false)}
                style={{ position: "absolute", left: "88%", top: 10 }}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>X</Text>
              </Pressable>

              {IMC < 18.5 ? (
                <Text style={styles.text}>
                  Abaixo do peso ({IMC.toFixed(2)})
                </Text>
              ) : IMC <= 24.9 ? (
                <Text style={styles.text}>Peso ideal ({IMC.toFixed(2)})</Text>
              ) : IMC <= 29.9 ? (
                <Text style={styles.text}>
                  Excesso de peso ({IMC.toFixed(2)})
                </Text>
              ) : IMC <= 30.9 ? (
                <Text style={styles.text}>Obesidade ({IMC.toFixed(2)})</Text>
              ) : (
                <Text style={styles.text}>
                  Obesidade extrema ({IMC.toFixed(2)})
                </Text>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
