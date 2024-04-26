import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import BackDrop from "../shared/components/ui/cards/BackDrop";
import ConnectionsScreen from "../modules/Connections";
import Typography from "../shared/components/ui/Typography";
import { useTheme } from "../shared/stores/themeStore";
import AddOptions from "../modules/Add";

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
          name="Create"
          component={View}
          options={{
            tabBarLabel: "Add",
            // tabBarIcon: ({ size, ...rest }) => <Typography>Hi</Typography>,
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              handlePresentModalPress();
            },
          }}
        />
        <Tab.Screen name="Connections" component={ConnectionsScreen} />
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
