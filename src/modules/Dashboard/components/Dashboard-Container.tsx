import { Card } from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

interface DashboardContainerProps {
  title: string;
  children: React.ReactNode;
}

const DashboardContainer = ({ title, children }: DashboardContainerProps) => {
  return (
    <Card disabled style={{ gap: 42 }}>
      <View style={{ gap: 5 }}>
        <ThemedText style={{ fontWeight: "500" }} size={18}>
          {title}
        </ThemedText>
        <View>{children}</View>
      </View>
    </Card>
  );
};

export default DashboardContainer;
