import ThemedText from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

interface DashboardContainerProps {
  title: string;
  children: React.ReactNode;
}

const DashboardContainer = ({ title, children }: DashboardContainerProps) => {
  return (
    <View style={{ gap: 5 }}>
      <ThemedText style={{ fontWeight: "500" }} size={18}>
        {title}
      </ThemedText>
      <View>{children}</View>
    </View>
  );
};

export default DashboardContainer;
