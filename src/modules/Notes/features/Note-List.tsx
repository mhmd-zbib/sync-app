import NOTE from "@/__test__/data/Notes.json";
import SearchInput from "@/components/SearchInput";
import useSearch from "@/hooks/useSearch";
import React, { useState } from "react";
import { FlatList } from "react-native";
import NoteItem from "./Note-List-Item";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchable = useSearch(NOTE, searchTerm, (item) => item.title);

  return (
    <>
      <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={{ gap: 10 }}
        data={searchable}
        renderItem={({ item }) => <NoteItem note={item} />}
      />
    </>
  );
};

export default Notes;
