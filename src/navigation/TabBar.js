import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ConnectionsScreen from "../modules/Connections";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Connections" component={ConnectionsScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
