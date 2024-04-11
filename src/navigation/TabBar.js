import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RemindersScreen from "../pages/reminders";
import ContactsScreen from "../pages/contacts";
import { useTheme } from "../stores/ThemeStore";

const TabBar = () => {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: theme.background,
        },
      }}>
      <Tab.Screen name="Reminders" component={RemindersScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
    </Tab.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
