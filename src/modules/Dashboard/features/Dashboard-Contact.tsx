import { View, Text } from "react-native";
import React from "react";
import LineChart from "@/components/Line-Graph";
import { Card } from "@/components/Card";

const DashboardContact = () => {
  const data = [
    { label: "27", value: 20 },
    { label: "28", value: 47 },
    { label: "29", value: 17 },
    { label: "30", value: 80 },
    { label: "1", value: 34 },
    { label: "2", value: 23 },
    { label: "2", value: 23 },
    { label: "2", value: 23 },
  ];

  return (
    <Card>
      <LineChart data={data} />
    </Card>
  );
};

export default DashboardContact;
