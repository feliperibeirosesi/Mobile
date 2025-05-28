import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Modal, Button, Pressable } from 'react-native';
import { useState } from 'react';
import { styles } from "./styles/style";
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  //serve para retornar um array com dois valores
  const [nome, setNome] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false)
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={(value) => setNome(value)}
        style={{ width: "80%", borderBottomWidth: 1, borderColor: "#000" }}
      />
      {nome ? <Text style={{ color: "#000" }}>Olá {nome}, seja bem vindo</Text> : null}
      <Button title='Abrir o modal' onPress={() => setModalVisibility(!modalVisibility)}></Button>
      <Modal transparent={true} visible={modalVisibility} animationType='fade'>
        <View style={styles.modalvisible}>
          <View style={styles.modalContainer}>
            <Pressable onPress={() => setModalVisibility(false)} style={{ left: 120, bottom: 10 }} >
              <Text style={{ color: "#fff" }}>X</Text>
            </Pressable>
            <Text style={{ color: "#c5dbd5", bottom: 10 }}>Meu primeiro modal</Text>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View >
  );
}


