import RemindersCompleted from "@/modules/Dashboard/components/Reminders-Dashboard/Reminders-Completed";
import DashboardMiniCont from "@/components/ui/Dashboard-Mini-Cont";
import RemindersCreated from "@/modules/Dashboard/components/Reminders-Dashboard/Reminders-Created";
import RemindersGoal from "@/modules/Dashboard/components/Reminders-Dashboard/Reminders-Goal";
import React from "react";
import { View } from "react-native";
import RemindersMissed from "@/modules/Dashboard/components/Reminders-Dashboard/Reminders-Missed";

const activityData = {
  created: {
    total: 30,
    weekly: [2, 5, 9, 12, 5, 6, 10],
    weeklyTotal: 5,
    plus: 2,
    monthlyTotal: 10,
  },

  completed: {
    total: 12,
    weeklyTotal: 3,
    monthlyTotal: 10,
    weeklyRatio: 0.4,
  },

  missed: {
    weeklyTotal: 12,
    monthlyTotal: 23,
    weekly: [2, 5, 9, 12, 5, 6, 10],
  },

  goals: {
    days: {
      total: 25,
      completed: 15,
    },
    progress: {
      total: 20,
      completed: 10,
    },
  },
};

const ReminderDashboardScreen = () => {
  const { created, completed, missed, goals } = activityData;

  return (
    <>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <DashboardMiniCont title="Created" value={created.total} />
        <DashboardMiniCont title="Completed" value={completed.total} />
      </View>
      <RemindersGoal goals={goals} />
      <RemindersCreated created={created} />
      <RemindersCompleted completed={completed} />
      <RemindersMissed missed={missed} />
    </>
  );
};

export default ReminderDashboardScreen;
