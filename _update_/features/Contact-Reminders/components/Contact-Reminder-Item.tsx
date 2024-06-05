import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import { formatHourMinute } from "@/utils/format-date";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface ContactReminderProps {
  reminder: ContactReminderType;
}

const ContactReminderItem = ({ reminder }: ContactReminderProps) => {
  const theme = useTheme();

  const { title, date } = reminder;
  const formattedDate = formatHourMinute(date);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginVertical: 3,
      }}>
      <View
        style={{
          backgroundColor: theme.accent,
          width: 6,
          height: "100%",
          borderRadius: 500,
        }}
      />
      <View style={{ gap: 6 }}>
        <ThemedText size={16}>{title}</ThemedText>
        <ThemedText variant="accent">{formattedDate}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default ContactReminderItem;
