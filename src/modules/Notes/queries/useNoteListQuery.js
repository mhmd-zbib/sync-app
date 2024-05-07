/**
 * Lists all the notes of the contacts
 */

import { useQuery } from "@tanstack/react-query";
import NoteServices from "../services/NoteServices";

export default function useNoteListQuery(id) {
  return useQuery({
    queryKey: ["ProfileNotes", id],
    queryFn: () => NoteServices.list(id),
    enabled: !!id,
    staleTime: 300000,
    cacheTime: 900000,
  });
}
