import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Logout from "./Logout"; // OU "./LogOut" dependendo do nome real do arquivo

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerTitle: "Calculadora de IMC",
        headerStyle: { backgroundColor: "#0d0e20" },
        drawerStyle: { backgroundColor: "#0d0e20" },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
