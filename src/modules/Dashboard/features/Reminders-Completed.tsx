import RingProgress from "@/components/ui/Ring-Graph";
import ThemedText from "@/components/ui/ThemedText";
import React from "react";
import { View } from "react-native";
import DashboardContainer from "../components/Dashboard-Container";

const Section = ({ title, value }: { title: string; value: number }) => {
  return (
    <View>
      <ThemedText variant="secondary">{title}</ThemedText>
      <ThemedText size={20}>{value}</ThemedText>
    </View>
  );
};

const RemindersCompleted = () => {
  return (
    <DashboardContainer title="Completed">
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <View style={{ gap: 10 }}>
          <Section title="Total Set" value={100} />
          <Section title="Completed" value={50} />
          <Section title="Completion Rate" value={50} />
        </View>

        <RingProgress progress={50} total={180} />
      </View>
    </DashboardContainer>
  );
};

export default RemindersCompleted;
