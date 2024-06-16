import data from "@/__test__/data/Notes.json";
import SearchInput from "@/components/SearchInput";
import NoteList from "@/modules/Notes/features/Note-List";
import React from "react";

const ContactNotesScreen = () => {
  return <NoteList data={data} ListHeaderComponent={<SearchInput />} />;
};

export default ContactNotesScreen;
