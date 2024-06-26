import data from "@/__test__/data/Notes.json";
import SearchInput from "@/components/SearchInput";
import NoteList from "@/modules/Notes/Components/Note-List";
import React from "react";

const GroupNotesScreen = () => {
  return (
    <NoteList
      data={data}
      ListHeaderComponent={<SearchInput />}
      scrollEnabled={false}
    />
  );
};

export default GroupNotesScreen;
