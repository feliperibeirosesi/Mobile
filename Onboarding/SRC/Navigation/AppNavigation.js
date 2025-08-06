import { StatusBar, useEffect } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//bibliotecas da rota stack
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importar as paginas de home e OnboardingScreen
import HomeScreen from '../Pages/HomeScreen';
import OnboardingScreen from '../Pages/OnbordingScreen';
import { useState } from 'react';

//constantes
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState(null);

  useEffect(() => {
    checkIfAreadyonboarded();
  }, []);

  const checkIfAreadyonboarded = async () => {
    let onboarded = await getItem("onboarded");

    if (onboarded == 1) {
      setShowOnboarding(false);
    } else {
      setShowOnboarding(true);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Você está na navigation</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
