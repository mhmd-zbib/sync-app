import BarGraph from "@/components/ui/Bar-Graph";
import Separator from "@/components/ui/Separator";
import ThemedText from "@/components/ui/ThemedText";
import React from "react";
import { Text, View } from "react-native";
import DashboardContainer from "../components/Dashboard-Container";

const RemindersMissed = () => {
  const data = [
    { label: "S", value: 23 },
    { label: "M", value: 20 },
    { label: "W", value: 47 },
    { label: "T", value: 17 },
    { label: "Th", value: 80 },
    { label: "F", value: 34 },
    { label: "S", value: 23 },
  ];

  const value = data.map((item) => item.value);
  const label = data.map((item) => item.label);
  return (
    <DashboardContainer title="Missed">
      <View
        style={{
          flexDirection: "row",
        }}>
        <View style={{ gap: 4, flex: 1 }}>
          <ThemedText style={{ fontWeight: "500" }} size={22}>
            11
          </ThemedText>
          <ThemedText variant="secondary">Miss this week</ThemedText>
        </View>

        <Separator vertical />

        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
          <Text style={{ color: "red", fontSize: 22 }}>3</Text>
          <ThemedText>Total</ThemedText>
        </View>
      </View>
      <BarGraph data={value} labels={label} />
    </DashboardContainer>
  );
};

export default RemindersMissed;
