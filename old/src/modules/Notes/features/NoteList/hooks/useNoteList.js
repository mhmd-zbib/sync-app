/**
 * Filters and sorts the note list with ability to be searched through
 */

import { useState } from "react";
import useNoteListQuery from "../../../queries/useNoteListQuery";
import useSearch from "../../../../../shared/hooks/useSearch";
import useSort from "../../../../../shared/hooks/useSort";

export function useNoteList(id) {
  const noteList = useNoteListQuery(id);

  const notes = noteList.data;

  const [searchTerm, setSearchTerm] = useState("");
  const searchable = useSearch(notes, searchTerm, "title");
  const filtered = useSort(searchable, "created_at", false);

  return { searchTerm, setSearchTerm, filtered, noteList };
}
