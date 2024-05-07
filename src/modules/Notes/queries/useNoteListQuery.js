/**
 * Lists all the notes of the contacts
 * @param {any} id - The contact id
 */

import { useQuery } from "@tanstack/react-query";
import NoteServices from "../services/NoteServices";

export default function useNoteListQuery(id) {
  return useQuery({
    queryKey: ["NoteList", id],
    queryFn: () => NoteServices.list(id),
    enabled: !!id,
    staleTime: 300000,
    cacheTime: 900000,
  });
}
