import React from "react";
import { FlatList } from "react-native";
import NoteItem from "./Note-List-Item";

interface NoteListProps {
  notes: NoteType[];
}

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <FlatList
      scrollEnabled={false}
      contentContainerStyle={{ gap: 10 }}
      data={notes}
      renderItem={({ item }) => <NoteItem note={item} />}
    />
  );
};

export default NoteList;
