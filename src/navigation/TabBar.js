import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RemindersScreen from "../pages/reminders";
import ContactsScreen from "../pages/contacts";
import { useTheme } from "../stores/ThemeStore";
import CreateSync from "../pages/create/idex";
import Typography from "../components/Text.js/Typography";

const TabBar = () => {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen name="Reminders" component={RemindersScreen} />
      <Tab.Screen
        name="bottomsheet"
        component={CreateSync}
        options={{
          tabBarLabel: "Check-in",
          tabBarIcon: ({ size, ...rest }) => <Typography>Hi</Typography>,
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            console.log("oh!");
          },
        })}
      />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
    </Tab.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
