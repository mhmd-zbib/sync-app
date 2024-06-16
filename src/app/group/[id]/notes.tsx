import NoteList from "@/modules/Notes/features/Note-List";
import React from "react";
import data from "@/__test__/data/Notes.json";

const GroupNotesScreen = () => {
  return <NoteList data={data} />;
};

export default GroupNotesScreen;
