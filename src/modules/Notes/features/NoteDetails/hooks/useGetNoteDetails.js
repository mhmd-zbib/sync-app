import { useQuery } from "@tanstack/react-query";
import NoteServices from "../../../services/NoteServices";

export default function useGetNoteDetails(id) {
  return useQuery({
    queryKey: ["NoteDetails", id],
    queryFn: () => NoteServices.getDetails(id),
    enabled: !!id,
  });
}
