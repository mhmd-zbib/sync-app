import React, { useState, useCallback, useMemo, useRef } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Typography from "../components/Text.js/Typography";
import ContactsScreen from "../pages/contacts";
import RemindersScreen from "../pages/reminders";
import { useTheme } from "../stores/ThemeStore";
import BackDrop from "../components/cards/BackDrop";
import AddToSync from "../pages/add";
const TabBar = () => {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

  const bottomSheetModalRef = useRef();
  const [isModalVisible, setModalVisible] = useState(false);
  const snapPoints = useMemo(() => ["5%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setModalVisible(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
    setModalVisible(false);
  }, []);
  const handleSheetChanges = useCallback((index) => {
    if (index === -1) setModalVisible(false);
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <>
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
          name="Create"
          component={View}
          options={{
            tabBarLabel: "Check-in",
            tabBarIcon: ({ size, ...rest }) => <Typography>Hi</Typography>,
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              handlePresentModalPress();
            },
          }}
        />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
      <BottomSheetModal
        handleIndicatorStyle={{ backgroundColor: theme.accent, width: 72 }}
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableDynamicSizing
        backgroundStyle={{
          backgroundColor: theme.secondary,
          borderWidth: 1,
          borderColor: theme.accent,
          paddingHorizontal: 20,
        }}
        backdropComponent={({ style }) => (
          <BackDrop visible={isModalVisible} onPress={handleCloseModal} />
        )}>
        <BottomSheetView>
          <AddToSync />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
