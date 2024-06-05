import { Card } from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import React from "react";

interface NoteItemProps {
  note: NoteType;
}

const NoteItem = ({ note }: NoteItemProps) => {
  return (
    <Card style={{ gap: 8 }}>
      <ThemedText size={12} variant="accent">
        {note.createdAt}
      </ThemedText>
      <ThemedText size={16}>{note.title}</ThemedText>
      <ThemedText variant="secondary" numberOfLines={4}>
        {note.details}
      </ThemedText>
    </Card>
  );
};

export default NoteItem;
