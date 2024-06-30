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
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginBottom: 8,
        // marginTop: 24,
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
