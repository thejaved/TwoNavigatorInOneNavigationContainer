import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Profile } from "../screens";

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
export default AppDrawer;
