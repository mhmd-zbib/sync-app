import BarGraph from "@/components/ui/Bar-Graph";
import DashboardTitle from "@/components/ui/Dashboard-Title";
import React from "react";
import { View } from "react-native";
import DashboardContainer from "../../../../components/ui/Dashboard-Container";

interface RemindersMissedProps {
  missed: {
    weeklyTotal: number;
    monthlyTotal: number;
    weekly: number[];
  };
}

const RemindersMissed = ({ missed }: RemindersMissedProps) => {
  const { weeklyTotal, weekly, monthlyTotal } = missed;

  return (
    <DashboardContainer title="Missed">
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 14,
        }}>
        <DashboardTitle value={weeklyTotal} title="Missed this week" />
        <DashboardTitle value={monthlyTotal} title="This month" />
      </View>

      <BarGraph data={weekly} />
    </DashboardContainer>
  );
};

export default RemindersMissed;
