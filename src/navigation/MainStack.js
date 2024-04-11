import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";
import { useTheme } from "../stores/ThemeStore";
import { useColorScheme } from "react-native";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { background } = useTheme();

  const barStyle = () => {
    const color = useColorScheme();
    if (color === "light") {
      return "dark-content";
    }
    return "light-content";
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background,
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={background} barStyle={barStyle()} />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="TabBar"
          screenOptions={({ navigation }) => ({
            contentStyle: {
              paddingHorizontal: 10,
            },
          })}>
          <Stack.Screen
            name="TabBar"
            component={TabBar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MainStack;
