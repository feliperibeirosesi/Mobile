import { NavigationContainer } from '@react-navigation/native'; //fornece o componente que vai envolver nossa navegação (pai)
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //importa as funções da rota stack

//Import pages
import Login from './SRC/Pages/Login';
import Home from './SRC/Pages/Home';
import Carrossel from './SRC/Pages/Carrossel';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Carrossel" component={Carrossel} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

