import { useState } from "react";
import useNoteListQuery from "../../../queries/useNoteListQuery";
import useSearch from "../../../../../shared/hooks/useSearch";
import useSort from "../../../../../shared/hooks/useSort";

export function useNoteList(id) {
  const noteList = useNoteListQuery(id);

  const [searchTerm, setSearchTerm] = useState("");
  const searchable = useSearch(noteList, searchTerm, "title");
  const filtered = useSort(searchable, "created_at", false);

  return { searchTerm, setSearchTerm, filtered, noteList };
}
