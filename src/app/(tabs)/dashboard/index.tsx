import ContactsCreated from "@/modules/Dashboard/features/Contacts-Created";
import RemindersCompleted from "@/modules/Dashboard/features/Reminders-Completed";
import RemindersCreated from "@/modules/Dashboard/features/Reminders-Created";
import React from "react";
import { View } from "react-native";

const DashboardScreen = () => {
  return (
    <View style={{ gap: 26 }}>
      <RemindersCreated />
      <RemindersCompleted />
      <RemindersCreated />
      <ContactsCreated />
    </View>
  );
};

export default DashboardScreen;
