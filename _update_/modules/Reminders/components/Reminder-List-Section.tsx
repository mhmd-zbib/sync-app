import { View, Text } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";

const ReminderListSection = ({ title }: { title: string }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginBottom: 8,
        marginTop: 24,
      }}>
      <ThemedText size={16} variant="accent">
        {title}
      </ThemedText>
      <View
        style={{
          backgroundColor: theme.accent,
          height: 1,
          width: "100%",
        }}
      />
    </View>
  );
};

export default ReminderListSection;
