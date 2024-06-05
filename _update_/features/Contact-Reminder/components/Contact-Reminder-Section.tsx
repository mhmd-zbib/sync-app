import { View, Text } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";

const ContactReminderSection = ({ section }: { section: string }) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginBottom: 6,
      }}>
      <ThemedText variant="accent">{section}</ThemedText>
      <View
        style={{ backgroundColor: theme.accent, height: 1, width: "100%" }}
      />
    </View>
  );
};

export default ContactReminderSection;
