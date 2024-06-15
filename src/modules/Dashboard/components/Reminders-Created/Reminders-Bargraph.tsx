import { View, Text } from "react-native";
import React from "react";
import BarGraph from "@/components/Bar-Graph";
import GraphTicks from "@/components/Graph-Ticks";

type DataType = {
  value: number;
  label: string;
};

type RemindersBargraphProps = {
  data: DataType[];
};

export function RemindersBargraph(props: RemindersBargraphProps) {
  const value = props.data.map((item) => item.value);
  const label = props.data.map((item) => item.label);

  return (
    <View>
      <BarGraph data={value} />
      <GraphTicks item={label} />
    </View>
  );
}
