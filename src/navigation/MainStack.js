import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
  DefaultTheme,
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar, View, useColorScheme } from "react-native";
import AddContactScreen from "../modules/AddFeatures/features/Contacts";
import ContactProfileScreen from "../modules/ContactProfile";
import AddNoteScreen from "../modules/Notes/features/NoteAdd";
import NoteDetails from "../modules/Notes/features/NoteDetails";
import GoBackButton from "../shared/components/ui/buttons/GoBackButton";
import { useTheme } from "../shared/stores/themeStore";
import TabBar from "./TabBar";
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
              presentation: "modal",
              headerLeft: () =>
                navigation.canGoBack() && (
                  <GoBackButton onPress={() => navigation.goBack()} />
                ),
              headerTitleAlign: "center",
              contentStyle: {
                paddingTop: 20,
              },
              headerStyle: {
                paddingVertical: 24,
                backgroundColor: background,
                shadowColor: "transparent",
              },
              headerTintColor: textPrimary,
            })}>
            <Stack.Screen
              name="Reminders"
              component={TabBar}
              options={({ route }) => ({
                title: getFocusedRouteNameFromRoute(route),
              })}
            />
            <Stack.Screen
              name="AddContactScreen"
              component={AddContactScreen}
            />

            <Stack.Screen
              name="ContactProfileScreen"
              component={ContactProfileScreen}
            />
            <Stack.Screen name="NoteDetails" component={NoteDetails} />
            <Stack.Screen name="AddNoteScreen" component={AddNoteScreen} />
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </NavigationContainer>
      <StatusBar backgroundColor={background} barStyle={"light-content"} />
    </View>
  );
};

export default MainStack;
