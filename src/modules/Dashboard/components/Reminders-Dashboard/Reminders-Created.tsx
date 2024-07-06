import BarGraph from "@/components/ui/Bar-Graph";
import Button from "@/components/ui/Button";
import DashboardContainer from "@/components/ui/Dashboard-Container";
import DashboardTitle from "@/components/ui/Dashboard-Title";
import { LineGraph } from "@/components/ui/Line-Graph";
import Separator from "@/components/ui/Separator";
import ThemedText from "@/components/ui/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

const RemindersCreated = () => {
  const data = [
    { label: "S", value: 20 },
    { label: "M", value: 90 },
    { label: "W", value: 47 },
    { label: "T", value: 17 },
    { label: "Th", value: 50 },
    { label: "F", value: 34 },
    { label: "S", value: 23 },
  ];

  const value = data.map((item) => item.value);
  const label = data.map((item) => item.label);

  return (
    <DashboardContainer title="Created">
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
          }}>
          {/* <DashboardTitle value={`10`} title="Created" /> */}
          <DashboardTitle value={`10`} title="Created this week" />
          <DashboardTitle value={`6`} title="Average" />
        </View>
      </View>
      <LineGraph data={value} labels={label} />
    </DashboardContainer>
  );
};

export default RemindersCreated;
