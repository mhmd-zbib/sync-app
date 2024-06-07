import { View, Text } from "react-native";
import React from "react";
import DashboardContainer from "../components/Dashboard-Container";
import ThemedText from "@/components/ThemedText";
import { Card } from "@/components/Card";
import BarGraph from "../components/Bar-Graph";

const DashboardConnection = () => {
  const data = [
    { label: "27 Sep", value: 20 },
    { label: "28 Sep", value: 47 },
    { label: "29 Sep", value: 17 },
    { label: "30 Sep", value: 80 },
    { label: "1 Oct", value: 34 },
    { label: "2 Oct", value: 23 },
  ];
  return (
    <DashboardContainer title="Reminders">
      <Card>
        <BarGraph data={data} />
      </Card>
    </DashboardContainer>
  );
};

export default DashboardConnection;
