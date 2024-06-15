import { Card } from "@/components/Card";
import GraphTicks from "@/components/Graph-Ticks";
import { LineGraph } from "@/components/Line-Graph";
import React from "react";

const DashboardContact = () => {
  const data = [
    { label: "S", value: 23 },
    { label: "M", value: 20 },
    { label: "W", value: 7 },
    { label: "T", value: 14 },
    { label: "Th", value: 80 },
    { label: "F", value: 34 },
    { label: "S", value: 60 },
  ];

  return (
    <Card disabled>
      <LineGraph data={data.map((item) => item.value)} />
      <GraphTicks item={data.map((item) => item.label)} />
    </Card>
  );
};

export default DashboardContact;
