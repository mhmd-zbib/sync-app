import { Card } from "@/components/ui/Card";
import ThemedText from "@/components/ui/ThemedText";
import { Link } from "expo-router";
import React from "react";

interface NoteItemProps {
  note: NoteType;
}

const NoteItem = ({ note }: NoteItemProps) => {
  return (
    <Link href={`note/${note.id}`} asChild>
      <Card style={{ gap: 8 }}>
        <ThemedText size={12} variant="accent">
          {note.createdAt}
        </ThemedText>
        <ThemedText size={16}>{note.title}</ThemedText>
        <ThemedText variant="secondary" numberOfLines={4}>
          {note.details}
        </ThemedText>
      </Card>
    </Link>
  );
};

export default NoteItem;
