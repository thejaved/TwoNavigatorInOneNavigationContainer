import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import { AppDetails, AppSettings } from "../screens";
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={"Bottom Tabs"}
          component={BottomTabs}
        ></Stack.Screen>
        <Stack.Screen name={"AppDetails"} component={AppDetails}></Stack.Screen>
        <Stack.Screen
          name={"AppSettings"}
          component={AppSettings}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
