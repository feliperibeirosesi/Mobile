import { NavigationContainer } from "@react-navigation/native";
import createNativeStackNavigator from "@react-navigation/native-stack";

import Home from "./screens/Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.navigation screenOptions={{ Headershow: false }}>
        <Stack.screen name="Home" components={Home} />
      </Stack.navigation>
    </NavigationContainer>
  );
}
