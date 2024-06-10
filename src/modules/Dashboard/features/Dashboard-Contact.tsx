import { View, Text } from "react-native";
import React from "react";
import { LineGraph } from "@/components/Line-Graph";
import { Card } from "@/components/Card";

const DashboardContact = () => {
  const data = [1, 88, 4, 8, 99];

  return (
    <Card>
      <LineGraph data={data} color={"red"} label="views" stat="120" />
    </Card>
  );
};

export default DashboardContact;
