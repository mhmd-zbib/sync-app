import DashboardContainer from "@/components/ui/Dashboard-Container";
import DashboardTitle from "@/components/ui/Dashboard-Title";
import ProgressBar from "@/components/ui/Progress-Bar";
import ThemedText from "@/components/ui/ThemedText";
import React from "react";

const RemindersGoal = () => {
  return (
    <DashboardContainer title="Goal">
      <DashboardTitle title="Goal" value={50} />
      <ProgressBar progress={50} />
    </DashboardContainer>
  );
};

export default RemindersGoal;
