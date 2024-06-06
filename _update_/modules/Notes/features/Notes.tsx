import NOTE from "@/__test__/data/Notes.json";
import SearchInput from "@/components/SearchInput";
import useSearch from "@/hooks/useSearch";
import React, { useState } from "react";
import NoteList from "../components/Note-List";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchable = useSearch(NOTE, searchTerm, (item) => item.title);

  return (
    <>
      <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
      <NoteList notes={searchable} />
    </>
  );
};

export default Notes;
