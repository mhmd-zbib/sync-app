import { Card } from "@/components/Card";
import React from "react";
import BarGraph from "../../../components/Bar-Graph";
import DashboardContainer from "../components/Dashboard-Container";

const RemindersCreated = () => {
  const data = [
    { label: "27", value: 20 },
    { label: "28", value: 47 },
    { label: "29", value: 17 },
    { label: "30", value: 80 },
    { label: "1", value: 34 },
    { label: "2", value: 23 },
  ];

  return (
    <DashboardContainer title="Reminders">
      <Card>
        {/* <RingProgress progress={10} total={45} title="Tier 7" /> */}
        <BarGraph data={data} />
      </Card>
    </DashboardContainer>
  );
};

export default RemindersCreated;
