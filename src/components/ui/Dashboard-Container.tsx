import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View } from "react-native";

interface DashboardContainerProps {
  title: string;
  children: React.ReactNode;
}

const DashboardContainer = ({ title, children }: DashboardContainerProps) => {
  const theme = useTheme();

  return (
    <View style={{ gap: 12, flex: 1 }}>
      <View
        style={{
          paddingHorizontal: 24,
          padding: 18,
          borderRadius: 20,
          backgroundColor: theme.secondary,
          // gap: 10,
        }}>
        {/* <ThemedText size={20}>{title}</ThemedText> */}
        <View>{children}</View>
      </View>
    </View>
  );
};

export default DashboardContainer;
