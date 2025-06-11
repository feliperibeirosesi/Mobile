import { StatusBar } from 'expo-status-bar';
import { Text, View, Switch } from 'react-native';

import { styles } from './src/styles/styles';
import { useState } from 'react';

export default function App() {

  //os set servem para alterar os valores do favorite por exemplo
  const [favorites, setFavorite] = useState(false)
  const [completed, setCompleted] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtros</Text>

      <View style={styles.filter}>
        <Text style={styles.text}>Mostrar Favoritos</Text>
        <Switch value={favorites} onValueChange={() => setFavorite(!favorites)}
          thumbColor={favorites ? "green" : "red"}
          trackColor={{ false: "red", true: "green" }} />

      </View>

      <View style={styles.filter}>
        <Text style={styles.text}>Mostrar Tarefas Completas</Text>
        <Switch value={completed} onValueChange={() => setCompleted(!completed)} />
      </View>

      <Text style={{ marginTop: 10 }}>Filtros Ativos</Text>

      {favorites && <Text> Favoritos</Text>}
      {completed && <Text> Terefas Completas</Text>}

      <StatusBar hidden />
    </View>
  );
}





