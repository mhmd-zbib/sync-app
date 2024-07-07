import DashboardContainer from "@/components/ui/Dashboard-Container";
import DashboardTitle from "@/components/ui/Dashboard-Title";
import { LineGraph } from "@/components/ui/Line-Graph";
import React from "react";
import { View } from "react-native";

interface RemindersCreatedType {
  created: {
    total: number;
    weekly: number[];
    weeklyTotal: number;
    monthlyTotal: number;
    plus: number;
  };
}

const RemindersCreated = ({ created }: RemindersCreatedType) => {
  const { weekly, weeklyTotal, monthlyTotal, plus } = created;

  return (
    <DashboardContainer title="Created">
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
          }}>
          <DashboardTitle
            value={weeklyTotal}
            title="Created this week"
            sub={plus}
          />
          <DashboardTitle value={monthlyTotal} title="This month" />
        </View>
      </View>
      <LineGraph data={weekly} />
    </DashboardContainer>
  );
};

export default RemindersCreated;
