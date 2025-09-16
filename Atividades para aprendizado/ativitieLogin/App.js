import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroScreen from "./SRC/Pages/Cadastro";
import Login from "./SRC/Pages/Login";
import Home from "./SRC/Pages/Home";
import DrawerRoutes from "./SRC/Pages/DrawerRoutes"; // Arquivo onde vai estar o Drawer

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
