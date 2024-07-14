import reminders from "@/__test__/data/Reminders.json";
import SearchInput from "@/components/ui/SearchInput";
import ReminderList from "@/features/Reminders/components/Reminder-List";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const RemindersScreenLayout = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ flex: 1 }}
      stickyHeaderHiddenOnScroll>
      <SearchInput padding />
      <ReminderList
        scrollEnabled={false}
        data={reminders}
        onScroll={(e) => {
          e.nativeEvent;
        }}
      />
    </ScrollView>
  );
};

export default RemindersScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },

  reminderGoalsContainer: {
    flexDirection: "row",
    borderRadius: 200,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  reminderGoalsTextContainer: {
    width: "50%",
    gap: 4,
    position: "absolute",
    left: "25%",
  },
});
