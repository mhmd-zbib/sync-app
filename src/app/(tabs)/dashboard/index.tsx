import RemindersCompleted from "@/modules/Dashboard/features/Reminders-Completed";
import RemindersCreated from "@/modules/Dashboard/features/Reminders-Created";
import RemindersMissed from "@/modules/Dashboard/features/Reminders-Missed";
import React from "react";
import { View } from "react-native";

const ReminderDashboardScreen = () => {
  return (
    <View style={{ gap: 24 }}>
      <RemindersCreated />
      <RemindersCompleted />
      <RemindersMissed />
    </View>
  );
};

export default ReminderDashboardScreen;
