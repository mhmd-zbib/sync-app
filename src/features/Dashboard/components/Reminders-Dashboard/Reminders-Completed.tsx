import DashboardContainer from "@/components/ui/Dashboard-Container";
import DashboardTitle from "@/components/ui/Dashboard-Title";
import RingProgress from "@/components/ui/Ring-Graph";
import ThemedText from "@/components/ui/ThemedText";
import React from "react";
import { PixelRatio, View } from "react-native";

interface RemindersCompletedProps {
  completed: {
    total: number;
    weeklyTotal: number;
    monthlyTotal: number;
    weeklyRatio: number;
  };
}

const RemindersCompleted = ({ completed }: RemindersCompletedProps) => {
  const { weeklyTotal, monthlyTotal, weeklyRatio } = completed;

  return (
    <DashboardContainer title="Completed">
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <View
          style={{
            height: "100%",
            justifyContent: "space-evenly",
          }}>
          <DashboardTitle title="Completed this week" value={weeklyTotal} />
          <DashboardTitle title="This month " value={monthlyTotal} />
        </View>

        <RingProgress ratio={weeklyRatio} />
      </View>
    </DashboardContainer>
  );
};

export default RemindersCompleted;
