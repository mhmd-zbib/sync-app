import { Card } from "@/components/Card";
import { GraphLabels } from "@/components/Graph-Labels";
import { LineGraph } from "@/components/Line-Graph";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View } from "react-native";

const DashboardContact = () => {
  const data = [12, 10, 0, 10, 6, 15, 9];
  const labels = ["sept", "nov", "dec", " mar", "apr", "may", "jun"];
  const theme = useTheme();

  return (
    <Card disabled>
      <LineGraph data={data} />
    </Card>
  );
};

export default DashboardContact;
