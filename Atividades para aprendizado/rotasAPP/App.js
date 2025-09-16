import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './src/Styles/styles';

import { NavigationContainer } from '@react-navigation/native'; //fornece o componente que vai envolver nossa navegação (pai)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

//Import pages
import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        tabBarStyle: {
          backgroundColor: '#522959',
          height: 50,
          position: "absolute",
          bottom: 50,
          borderRadius: 15,
          borderTopColor: "transparent",
          padding: 10,
          shadowColor: "purple",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
          elevation: 8,
          width: "80%",
          left: "100%",
          marginHorizontal: "10%"
        },
        tabBarActiveBackgroundColor: '#2a114b',
        tabBarActiveTintColor: "#FFF",
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" size={size} color={color} />
          }
        }} />
        <Tab.Screen name="Sobre" component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="layout" size={size} color={color} />
            }, headerShown: false,

          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

