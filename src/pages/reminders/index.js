import { Text, View } from "react-native";
import React from "react";
import RemindersList from "./components/RemindersList";
import SearchBar from "../../components/ui/SearchBar";

const RemindersScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        containerStyle={{ marginBottom: 16 }}
        placeHolder="Search reminders"
      />
      <RemindersList />
    </View>
  );
};

export default RemindersScreen;
