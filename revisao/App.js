import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importar as paginas
import Home from './SRC/pages/Home';
import Cadastro from "./SRC/pages/Cadastro";
import Login from "./SRC/pages/Login";

//definir o stack
const Stack = createNativeStackNavigator();


//projeto
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


