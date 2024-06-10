import { Card } from "@/components/Card";
import { LineGraph } from "@/components/Line-Graph";
import React from "react";

const DashboardContact = () => {
  const data = [0, 10, 4, 10, 6, 15, 18];
  const labels = ["sept", "nov", "dec", " mar", "apr", "may", "jun"];

  return (
    <Card>
      <LineGraph data={data} />
      {/* <GraphLabels labels={labels} /> */}
    </Card>
  );
};

export default DashboardContact;
