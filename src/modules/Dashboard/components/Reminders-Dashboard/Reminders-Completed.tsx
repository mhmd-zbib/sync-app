import DashboardContainer from "@/components/ui/Dashboard-Container";
import DashboardTitle from "@/components/ui/Dashboard-Title";
import RingProgress from "@/components/ui/Ring-Graph";
import ThemedText from "@/components/ui/ThemedText";
import React from "react";
import { View } from "react-native";

const Section = ({ title, value }: { title: string; value: any }) => {
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
        <View
          style={{
            gap: 20,
            // height: 160,
            // backgroundColor: "red",
          }}>
          <DashboardTitle title="Last 7 days" value={10} />
          {/* <DashboardTitle title="Total" value={40} /> */}
        </View>

        {/* <RingProgress progress={50} total={180} /> */}
      </View>
    </DashboardContainer>
  );
};

export default RemindersCompleted;
