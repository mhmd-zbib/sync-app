import { Text, View } from "react-native";
import React from "react";
import RemindersList from "./components/RemindersList";
import SearchBar from "../../components/ui/SearchBar";
import { useReminderSearchStore } from "./stores/useReminderSearchStore";

const RemindersScreen = () => {
  const setSearchTerm = useReminderSearchStore((state) => state.setSearchTerm);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        containerStyle={{ marginBottom: 16 }}
        placeHolder="Search reminders"
        setSearchTerm={setSearchTerm}
      />
      <RemindersList />
    </View>
  );
};

export default RemindersScreen;
