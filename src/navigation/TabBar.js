import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import AddOptions from "../modules/AddFeatures";
import ConnectionsScreen from "../modules/Connections";
import BackDrop from "../shared/components/ui/cards/BackDrop";
import { useTheme } from "../shared/stores/themeStore";
import ReminderListScreen from "../modules/Reminders/features/ReminderList";

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
    setModalVisible(false);
    bottomSheetModalRef.current?.close();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    if (index === -1) setModalVisible(false);
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.background,
            borderTopWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="Reminders"
          component={ReminderListScreen}
          screenOptions={{ headerShown: false }}
        />

        <Tab.Screen
          name="Create"
          component={View}
          options={{
            tabBarLabel: "Add",
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              handlePresentModalPress();
            },
          }}
        />
        <Tab.Screen
          name="Connections"
          component={ConnectionsScreen}
          screenOptions={{ headerShown: false }}
        />
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
          <AddOptions />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
