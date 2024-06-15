import { Card } from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import { formatFullDateTime } from "@/utils/format-date";
import { Link } from "expo-router";
import React from "react";

interface ReminderListItem {
  reminder: RemindersType;
}

const ReminderItem = ({ reminder }: ReminderListItem) => {
  return (
    <Link href={`reminder/${reminder.id}`} asChild>
      <Card style={{ marginBottom: 10 }}>
        <ThemedText size={12} variant="accent">
          {formatFullDateTime(reminder.date)}
        </ThemedText>
        <ThemedText style={{ marginBottom: 8, marginTop: 4 }} size={18}>
          {reminder.title}
        </ThemedText>
        <ThemedText numberOfLines={3} variant="secondary" size={14}>
          {reminder.details}
        </ThemedText>
      </Card>
    </Link>
  );
};

export default ReminderItem;
