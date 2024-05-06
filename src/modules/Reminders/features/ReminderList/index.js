import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ReminderList from "./components/ReminderList";
import useSort from "../../../../shared/hooks/useSort";
import useGroupedSections from "../../../../shared/hooks/useGroupedSections";

const ReminderListScreen = () => {
  const dummyReminders = [
    {
      title: "doing stuff",
      details: "stuff here",
      created_at: 1714939217994,
    },
    {
      title: "doing stuff",
      details: "stuff here",
      created_at: 1714939217994,
    },
    {
      title: "doing stuff",
      details: "stuff here",
      created_at: 1713941316705,
    },
  ];

  const sorted = useSort(dummyReminders, "created_at");
  const sectioned = useGroupedSections(sorted, (item) => item.created_at);

  return <ReminderList reminders={sectioned} />;
};

export default ReminderListScreen;

const styles = StyleSheet.create({});
