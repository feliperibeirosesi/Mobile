import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './src/Styles/styles';

import { NavigationContainer } from '@react-navigation/native'; //fornece o componente que vai envolver nossa navegação (pai)
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //importa as funções da rota stack

//Import pages
import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

