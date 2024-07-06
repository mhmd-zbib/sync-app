import BarGraph from "@/components/ui/Bar-Graph";
import React from "react";
import DashboardContainer from "../../../../components/ui/Dashboard-Container";
import DashboardTitle from "@/components/ui/Dashboard-Title";
import { View } from "react-native";
import Separator from "@/components/ui/Separator";

const DATA = {
  weekMissed: 11,
  totalMissed: 20,
};

const RemindersMissed = () => {
  const data = [
    { label: "S", value: 12 },
    { label: "M", value: 20 },
    { label: "W", value: 47 },
    { label: "T", value: 17 },
    { label: "Th", value: 80 },
    { label: "F", value: 0 },
    { label: "S", value: 23 },
  ];

  const value = data.map((item) => item.value);
  const label = data.map((item) => item.label);
  return (
    <DashboardContainer title="Missed">
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <DashboardTitle value={12} title="Missed this week" />
        <DashboardTitle value={3} title="Average" />
      </View>

      <BarGraph data={value} labels={label} />
    </DashboardContainer>
  );
};

export default RemindersMissed;
