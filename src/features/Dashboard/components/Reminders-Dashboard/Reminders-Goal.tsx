import DashboardContainer from "@/components/ui/Dashboard-Container";
import DashboardTitle from "@/components/ui/Dashboard-Title";
import ProgressBar from "@/components/ui/Progress-Bar";
import React from "react";
import { View } from "react-native";

interface RemindersGoal {
  goals: {
    days: {
      total: number;
      completed: number;
    };
    progress: {
      total: number;
      completed: number;
    };
  };
}

const RemindersGoal = ({ goals }: RemindersGoal) => {
  const { progress, days } = goals;

  const progressValue = `${progress.completed}/${progress.total}`;
  const daysValue = `${days.completed}/${days.total}`;

  const progressRatio =
    progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;
  const daysRatio = days.total > 0 ? (days.completed / days.total) * 100 : 0;

  return (
    <DashboardContainer title="Goal">
      <View style={{ gap: 5, marginBottom: 20 }}>
        <DashboardTitle title="Goal" sideValue={progressValue} />
        <ProgressBar progress={progressRatio} />
      </View>
      <View style={{ gap: 5 }}>
        <DashboardTitle title="Days left" sideValue={daysValue} />
        <ProgressBar progress={daysRatio} />
      </View>
    </DashboardContainer>
  );
};

export default RemindersGoal;
