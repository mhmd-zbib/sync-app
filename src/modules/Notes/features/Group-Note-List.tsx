import React from "react";
import NoteList from "../Components/Note-List";
import data from "@/__test__/data/Notes.json";

const GroupNoteList = () => {
  return <NoteList data={data} />;
};

export default GroupNoteList;
