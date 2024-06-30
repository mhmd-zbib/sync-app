import Card from "@/components/ui/Card";
import ThemedText from "@/components/ui/ThemedText";
import React from "react";

interface ReminderListItem {
  reminder: RemindersType;
}

const ReminderItem = ({ reminder }: ReminderListItem) => {
  return (
    <Card href={`reminder/${reminder.id}`} style={{ gap: 6 }}>
      <ThemedText variant="accent">Monday</ThemedText>
      <ThemedText size={16}>{reminder.title}</ThemedText>
      <ThemedText numberOfLines={3} variant="secondary">
        {reminder.details}
      </ThemedText>
    </Card>
  );
};

export default ReminderItem;
