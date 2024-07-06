import DashboardMiniCont from "@/components/ui/Dashboard-Mini-Cont";
import ProgressBar from "@/components/ui/Progress-Bar";
import RemindersCompleted from "@/modules/Dashboard/components/Reminders-Dashboard/Reminders-Completed";
import RemindersCreated from "@/modules/Dashboard/components/Reminders-Dashboard/Reminders-Created";
import RemindersGoal from "@/modules/Dashboard/components/Reminders-Dashboard/Reminders-Goal";
import RemindersMissed from "@/modules/Dashboard/components/Reminders-Dashboard/Reminders-Missed";
import React from "react";
import { View } from "react-native";

const ReminderDashboardScreen = () => {
  return (
    <>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <DashboardMiniCont title="Created" value={12} />
        <DashboardMiniCont title="Completed" value={150} />
      </View>

      {/* <RemindersGoal /> */}

      <RemindersCreated />
      <RemindersCompleted />
      <RemindersMissed />
    </>
  );
};

export default ReminderDashboardScreen;
