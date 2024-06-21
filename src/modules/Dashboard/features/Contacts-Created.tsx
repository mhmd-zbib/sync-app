import { Card } from "@/components/Card";
import GraphTicks from "@/components/Graph-Ticks";
import { LineGraph } from "@/components/Line-Graph";
import React from "react";
import DashboardContainer from "../components/Dashboard-Container";

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

  return (
    <DashboardContainer title="Contacts">
      <Card disabled>
        <LineGraph data={value} labels={labels} />
      </Card>
    </DashboardContainer>
  );
};

export default ContactsCreated;
