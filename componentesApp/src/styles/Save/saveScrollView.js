import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';

import { styles } from './src/styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.box, { backgroundColor: "black" }]}>
          <Text style={{ color: "white", fontSize: 20 }}>Primeira caixa!</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Text style={{ fontSize: 20 }}>Segnda caixa!</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "yellow" }]}>
          <Text style={{ fontSize: 20 }}>Terceira caixa!</Text>
        </View>
      </ScrollView>
      <StatusBar hidden />
    </View>
  );
}
