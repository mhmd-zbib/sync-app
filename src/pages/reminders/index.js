import { Text, View } from "react-native";
import React from "react";
import RemindersList from "./components/RemindersList";

const RemindersScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <RemindersList />
    </View>
  );
};

export default RemindersScreen;
