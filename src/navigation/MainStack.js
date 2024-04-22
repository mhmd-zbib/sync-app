import React from "react";
import { StatusBar, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";
import { useTheme } from "../stores/shared/themeStore";
import { useColorScheme } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AddConnection from "../pages/contacts/AddContactPage";
import AddReminder from "../pages/reminders/AddReminderPage";
import GoBackButton from "../components/ui/buttons/GoBackButton";
import DetailsContactPage from "../pages/contacts/DetailsContactPage";
import ListTagsPage from "../pages/tags/ListTagsPage";
import AddTagsPage from "../pages/tags/AddTagsPage";
import DetailsReminderPage from "../pages/reminders/DetailsReminderPage";
import AddContactNote from "../pages/notes/AddContactNotePage";
import ContactEditDescription from "../pages/contacts/contactDetails/info/ContactEditDescription";
import ContactEditConnections from "../pages/contacts/contactDetails/info/ContactEditConnections";
import ContactAddExperience from "../pages/contacts/contactDetails/info/ContactAddExp";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { background, textPrimary } = useTheme();
  const colorScheme = useColorScheme();
  // const navigation = useNavigation

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
            <Stack.Screen name="AddReminder" component={AddReminder} />
            <Stack.Screen name="AddConnection" component={AddConnection} />

            <Stack.Screen
              name="ContactDetails"
              component={DetailsContactPage}
            />
            <Stack.Screen name="AddContactNote" component={AddContactNote} />
            <Stack.Screen name="Tags" component={ListTagsPage} />
            <Stack.Screen name="AddTag" component={AddTagsPage} />

            <Stack.Screen
              options={{ title: "Edit Description" }}
              name="EditContactDescription"
              component={ContactEditDescription}
            />

            <Stack.Screen
              options={{ title: "Edit Contact" }}
              name="ContactEditConnections"
              component={ContactEditConnections}
            />

            <Stack.Screen
              name="ContactAddExperience"
              component={ContactAddExperience}
              options={{ title: "Job" }}
            />

            <Stack.Screen
              options={{ title: "Details" }}
              name="ReminderDetails"
              component={DetailsReminderPage}
            />
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </NavigationContainer>
      <StatusBar backgroundColor={background} barStyle={"light-content"} />
    </View>
  );
};

export default MainStack;
