import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";

interface ContactReminderProps {
  reminder: ContactReminderType;
}

const ContactReminderItem = ({ reminder }: ContactReminderProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <View
        style={{
          backgroundColor: theme.accent,
          width: 6,
          height: "100%",
          borderRadius: 500,
        }}
      />
      <View style={{ gap: 6 }}>
        <ThemedText size={16}>{reminder.title}</ThemedText>
        <ThemedText variant="accent">{reminder.createdAt}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default ContactReminderItem;
