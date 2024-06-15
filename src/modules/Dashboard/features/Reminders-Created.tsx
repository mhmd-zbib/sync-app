import { Card } from "@/components/Card";
import React from "react";
import DashboardContainer from "../components/Dashboard-Container";
import { RemindersBargraph } from "../components/Reminders-Created/Reminders-Bargraph";
import RemindersDashboardInfo from "../components/Reminders-Created/Reminders-Dashboard-Info";
const RemindersCreated = () => {
  const data = [
    { label: "S", value: 23 },
    { label: "M", value: 20 },
    { label: "W", value: 47 },
    { label: "T", value: 17 },
    { label: "Th", value: 80 },
    { label: "F", value: 34 },
    { label: "S", value: 23 },
  ];

  return (
    <DashboardContainer title="Reminders">
      <Card disabled style={{ gap: 42 }}>
        <RemindersDashboardInfo />
        <RemindersBargraph data={data} />
      </Card>
    </DashboardContainer>
  );
};
0;

export default RemindersCreated;
