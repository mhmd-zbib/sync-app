import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
  DefaultTheme,
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar, View, useColorScheme } from "react-native";
import ContactAddScreen from "../modules/Contacts/features/ContactAdd";
import ContactSelectListScreen from "../modules/Contacts/features/ContactSelectList";
import ExperienceAddScreen from "../modules/Experience/features/ExperienceAdd/index.js";
import ExperienceListScreen from "../modules/Experience/features/ExperienceList/index.js";
import GroupAddScreen from "../modules/Groups/features/GroupAdd";
import GroupDetailsScreen from "../modules/Groups/features/GroupDetails.js";
import AddNoteScreen from "../modules/Notes/features/NoteAdd";
import NoteDetails from "../modules/Notes/features/NoteDetails";
import EditContactScreen from "../modules/Profile/features/EditContact/index.js";
import EditDescriptionScreen from "../modules/Profile/features/EditDescription/index.js";
import ProfileScreen from "../modules/Profile/features/ProfileDetails/index.js";
import TagAddScreen from "../modules/Tags/features/TagAdd/index.js";
import TagListScreen from "../modules/Tags/features/TagsList/index.js";
import GoBackButton from "../shared/components/ui/buttons/GoBackButton";
import { useTheme } from "../shared/stores/themeStore";
import TabBar from "./TabBar";
import EditProfileScreen from "../modules/Profile/features/EditProfile/index.js";

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
              // presentation: "push",
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
                // borderBottomWidth: 0, // Removes the border line
                // shadowOpacity: 0, // Removes shadow on iOS
              },
              headerTintColor: textPrimary,
            })}>
            <Stack.Screen
              name="Reminders"
              component={TabBar}
              options={({ route }) => ({
                headerShown: false,

                title: getFocusedRouteNameFromRoute(route),
              })}
            />
            {/* --------------------------------- Profile -------------------------------- */}
            <Stack.Screen
              name="ContactProfileScreen"
              component={ProfileScreen}
              options={{
                title: "Profile",
              }}
            />
            <Stack.Screen
              name="EditDescriptionScreen"
              component={EditDescriptionScreen}
            />
            <Stack.Screen
              name="EditContactScreen"
              component={EditContactScreen}
            />

            <Stack.Screen
              name="EditProfileScreen"
              component={EditProfileScreen}
            />
            {/* ------------------------------- Experience ------------------------------- */}
            <Stack.Screen
              name="ExperienceListScreen"
              component={ExperienceListScreen}
              options={{
                title: "Experience",
              }}
            />

            <Stack.Screen
              name="ExperienceAddScreen"
              component={ExperienceAddScreen}
            />

            {/* ---------------------------------- Tags ---------------------------------- */}
            <Stack.Screen name="TagsListScreen" component={TagListScreen} />
            <Stack.Screen name="TagAddScreen" component={TagAddScreen} />
            {/* -------------------------------- Contacts -------------------------------- */}
            <Stack.Screen
              name="ContactAddScreen"
              component={ContactAddScreen}
            />
            <Stack.Screen
              name="ContactSelectListScreen"
              component={ContactSelectListScreen}
            />
            {/* -------------------------------- Reminders ------------------------------- */}
            {/* ---------------------------------- Notes --------------------------------- */}
            <Stack.Screen name="NoteDetails" component={NoteDetails} />
            <Stack.Screen name="AddNoteScreen" component={AddNoteScreen} />
            {/* --------------------------------- Groups --------------------------------- */}
            <Stack.Screen name="GroupAddScreen" component={GroupAddScreen} />
            <Stack.Screen
              name="GroupDetailsScreen"
              component={GroupDetailsScreen}
            />
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </NavigationContainer>
      <StatusBar backgroundColor={background} barStyle={"light-content"} />
    </View>
  );
};

export default MainStack;