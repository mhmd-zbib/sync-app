import ThemedText from "@/components/ui/ThemedText";
import ThemedView from "@/components/ui/ThemedView";
import React from "react";
import { View } from "react-native";

interface DashboardContainerProps {
  title: string;
  children: React.ReactNode;
}

const DashboardContainer = ({ title, children }: DashboardContainerProps) => {
  return (
    <View style={{ gap: 12 }}>
      <ThemedText size={16}>{title}</ThemedText>
      <ThemedView
        style={{
          paddingHorizontal: 24,
          padding: 18,
          borderRadius: 20,
          gap: 30,
        }}
        color="secondary">
        {children}
      </ThemedView>
    </View>
  );
};

export default DashboardContainer;
