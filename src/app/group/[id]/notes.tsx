import NoteList from "@/modules/Notes/Components/Note-List";
import React from "react";
import data from "@/__test__/data/Notes.json";
import GroupNoteList from "@/modules/Notes/features/Group-Note-List";

const GroupNotesScreen = () => {
  return <GroupNoteList />;
};

export default GroupNotesScreen;
