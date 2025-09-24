import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./SRC/Pages/Home";
import Login from "./SRC/Pages/Login"
import Carrosel from "./SRC/Pages/Carrosel";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Carrosel" component={Carrosel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
