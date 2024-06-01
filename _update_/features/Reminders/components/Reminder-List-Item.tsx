import { Card } from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import React from "react";

const ReminderListItem = ({ reminder, onPress }: ReminderListItem) => {
  return (
    <Card style={{ marginBottom: 10 }}>
      <ThemedText size={12} variant="accent">
        {reminder.date}
      </ThemedText>
      <ThemedText style={{ marginBottom: 8, marginTop: 4 }} size={18}>
        {reminder.title}
      </ThemedText>
      <ThemedText numberOfLines={3} variant="secondary" size={14}>
        {reminder.details}
      </ThemedText>
    </Card>
  );
};

export default ReminderListItem;
