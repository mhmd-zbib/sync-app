import SearchInput from "@/components/SearchInput";
import useSearch from "@/hooks/useSearch";
import React, { useState } from "react";
import { FlatList } from "react-native";
import NoteItem from "../components/Note-List-Item";
import NOTE from "@/__test__/data/Notes.json";

const NoteList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchable = useSearch(NOTE, searchTerm, (item) => item.title);

  return (
    <FlatList
      scrollEnabled={false}
      ListHeaderComponent={
        <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
      }
      contentContainerStyle={{ gap: 10 }}
      data={searchable}
      renderItem={({ item }) => <NoteItem note={item} />}
    />
  );
};

export default NoteList;
