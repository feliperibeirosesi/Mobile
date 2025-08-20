import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { LoginStyles } from './SRC/Style/LoginStyle';

export default function App() {
  return (
    <View style={LoginStyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

