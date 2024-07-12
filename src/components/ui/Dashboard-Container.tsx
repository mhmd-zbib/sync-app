import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View } from "react-native";

interface DashboardContainerProps {
  title?: string;
  children: React.ReactNode;
}

const DashboardContainer = ({ title, children }: DashboardContainerProps) => {
  const theme = useTheme();

  return (
    <View
      style={{
        paddingHorizontal: 24,
        padding: 18,
        borderRadius: 20,
        backgroundColor: theme.secondary,
        flex: 1,
        // gap: 18,
        // gap: 10,
      }}>
      {children}
    </View>
  );
};

export default DashboardContainer;
