import { useQuery } from "@tanstack/react-query";
import GetProfile from "../../ContactProfile/services/ProfileService";
import useContactIdStore from "../../ContactProfile/stores/ContactIdStore";
import NotesServices from "../services/NoteServices";
import NoteServices from "../services/NoteServices";

export default function useGetNotes() {
  const id = useContactIdStore((state) => state.id);

  return useQuery({
    queryKey: ["ProfileNotes", id],
    queryFn: () => NoteServices.list(id),
    enabled: !!id,
    staleTime: 300000,
    cacheTime: 900000,
  });
}
