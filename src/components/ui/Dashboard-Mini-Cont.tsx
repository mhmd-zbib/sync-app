import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View } from "react-native";
import ThemedText from "./ThemedText";

interface DashboardContainerProps {
  title: string;
  value: any;
}

const DashboardMiniCont = ({ title, value }: DashboardContainerProps) => {
  const theme = useTheme();

  return (
    <View
      style={{
        paddingHorizontal: 24,
        padding: 18,
        // gap: 20,
        borderRadius: 20,
        backgroundColor: theme.secondary,
        flex: 1,
      }}>
      <ThemedText variant="secondary">{title}</ThemedText>
      <ThemedText size={28}>{value}</ThemedText>
    </View>
  );
};

export default DashboardMiniCont;
