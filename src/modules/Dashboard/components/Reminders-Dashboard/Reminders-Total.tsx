import { View, Text } from "react-native";
import React from "react";
import DashboardContainer from "@/components/ui/Dashboard-Container";
import ThemedText from "@/components/ui/ThemedText";
import DashboardTitle from "@/components/ui/Dashboard-Title";

const RemindersTotal = () => {
  return (
    <DashboardContainer title="Total">
      <DashboardTitle title="Total Created" value={120} />
    </DashboardContainer>
  );
};

export default RemindersTotal;
