import ThemedText from "@/components/ui/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import { formatMonthYear } from "@/utils/format-date";
import React from "react";
import { View } from "react-native";

export const ReminderListSection = ({ title }: { title: string }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginBottom: 2,
      }}>
      <ThemedText size={16} variant="accent">
        {formatMonthYear(title)}
      </ThemedText>
      <View
        style={{
          backgroundColor: theme.accent,
          height: 1,
          width: "100%",
          opacity: 0.5,
        }}
      />
    </View>
  );
};
