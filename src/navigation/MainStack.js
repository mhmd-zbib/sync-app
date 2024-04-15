import React from "react";
import { StatusBar, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";
import { useTheme } from "../stores/ThemeStore";
import { useColorScheme } from "react-native";
import AddReminder from "../pages/add/subscreens/addReminder";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AddContact from "../pages/add/subscreens/addContact";
import AddConnection from "../pages/add/subscreens/addContact";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { background, textPrimary } = useTheme();
  const colorScheme = useColorScheme();

  const barStyle = () => {
    if (colorScheme === "dark") {
      return "light-content";
    }
    if (colorScheme === "light") {
      return "dark-content";
    }
    return "default";
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background,
    },
  };

  return (
    <View style={{ flex: 1, backgroundColor: background }}>
      <NavigationContainer theme={MyTheme}>
        <BottomSheetModalProvider>
          <Stack.Navigator
            initialRouteName="Reminders"
            screenOptions={({ navigation }) => ({
              contentStyle: {
                paddingHorizontal: 10,
              },
              headerStyle: {
                backgroundColor: background,
                shadowColor: "transparent",
              },
              headerTintColor: textPrimary,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            })}>
            <Stack.Screen
              name="Reminders"
              component={TabBar}
              options={({ route }) => ({
                title: getFocusedRouteNameFromRoute(route),
              })}
            />

            <Stack.Screen name="AddReminder" component={AddReminder} />
            <Stack.Screen name="AddConnection" component={AddConnection} />
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </NavigationContainer>
      <StatusBar backgroundColor={background} barStyle={"light-content"} />
    </View>
  );
};

export default MainStack;
