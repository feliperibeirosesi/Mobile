import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../Styles/styles';

import { NavigationContainer } from '@react-navigation/native'; //fornece o componente que vai envolver nossa navegação (pai)
import { createDrawerNavigator } from '@react-navigation/drawer';

import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

//Import pages
import Home from './Home';
import Sobre from './Sobre';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
        headerTintColor: "green",
        headerTitle: "",
        drawerStyle: { backgroundColor: '#522959', elevation: 0, shadowOpacity: 0 },
        drawerActiveBackgroundColor: '#2a114b',
        drawerActiveTintColor: "#FFF",
        drawerInactiveBackgroundColor: "#fae5d8",
        drawerInactiveTintColor: "#000"
      }}>
        <Drawer.Screen name="Home" component={Home} options={{
          drawerIcon: ({ color, size }) => {
            return <Entypo name="home" size={size} color={color} />
          }
        }} />
        <Drawer.Screen name="Sobre" component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Feather name="layout" size={size} color={color} />
            }, headerShown: false,

          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

