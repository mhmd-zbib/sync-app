/**
 * @param {any} id - note id for details fetching
 */

import { useQuery } from "@tanstack/react-query";
import NoteServices from "../services/NoteServices";

export default function useNoteDetailsQuery(id) {
  return useQuery({
    queryKey: ["NoteDetails", id],
    queryFn: () => NoteServices.getDetails(id),
    enabled: !!id,
  });
}
