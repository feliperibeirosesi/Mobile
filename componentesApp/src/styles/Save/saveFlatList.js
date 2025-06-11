import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from 'react-native';

import { styles } from './src/styles/styles';

export default function App() {

  const dados = [
    { id: 1, nome: "Felphe", color: "purple" },
    { id: 2, nome: "Zumbi", color: "orange" },
    { id: 3, nome: "Kaaba", color: "gray" },
    { id: 4, nome: "Marcio", color: "Blue" },
    { id: 5, nome: "Freshy", color: "black" },


  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.color }]}>
            <Text style={{ fontSize: 20 }}>{item.nome}</Text>
          </View>
        )}
      />
      <StatusBar hidden />
    </View>
  );
}
