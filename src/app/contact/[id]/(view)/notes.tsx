import data from "@/__test__/data/Notes.json";
import SearchInput from "@/components/ui/SearchInput";
import NoteList from "@/modules/Notes/Components/Note-List";
import React from "react";

const ContactNotesScreen = () => {
  return (
    <NoteList
      data={data}
      scrollEnabled={false}
      ListHeaderComponent={
        <SearchInput
          onScroll={() => {
            console.log("scrolled");
          }}
        />
      }
      stickyHeaderIndices={[0]}
    />
  );
};

export default ContactNotesScreen;
