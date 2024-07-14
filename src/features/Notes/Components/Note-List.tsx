import React from "react";
import { FlatList, FlatListProps } from "react-native";
import NoteItem from "./Note-List-Item";

const NoteList: React.FC<FlatListProps<NoteType>> = (props) => {
  return (
    <FlatList
      {...props}
      contentContainerStyle={{ gap: 10 }}
      data={props.data}
      renderItem={({ item }) => <NoteItem note={item} />}
    />
  );
};

export default NoteList;
