import { Card } from "@/components/ui/Card";
import GraphTicks from "@/components/ui/Graph-Ticks";
import { LineGraph } from "@/components/ui/Line-Graph";
import React from "react";
import DashboardContainer from "../components/Dashboard-Container";
import { View } from "react-native";

const ContactsCreated = () => {
  const data = [
    { label: "S", value: 23 },
    { label: "M", value: 20 },
    { label: "W", value: 7 },
    { label: "T", value: 14 },
    { label: "Th", value: 80 },
    { label: "F", value: 34 },
    { label: "S", value: 60 },
  ];

  const value = data.map((item) => item.value);
  const labels = data.map((item) => item.label);

  return <LineGraph data={value} labels={labels} />;
};

export default ContactsCreated;
