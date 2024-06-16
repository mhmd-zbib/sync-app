import React from "react";
import { FlatList, FlatListProps } from "react-native";
import NoteItem from "./Note-List-Item";

interface NoteListProps extends FlatListProps<NoteType> {
  data: NoteType[];
}

const NoteList = ({ data, ...props }: NoteListProps) => {
  return (
    <FlatList
      {...props}
      contentContainerStyle={{ gap: 10 }}
      data={data}
      renderItem={({ item }) => <NoteItem note={item} />}
    />
  );
};

export default NoteList;
