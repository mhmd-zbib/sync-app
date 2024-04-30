import { useQuery } from "@tanstack/react-query";
import GetProfile from "../services/GetProfile";
import useContactIdStore from "../stores/ContactIdStore";

export default function () {
  const id = useContactIdStore((state) => state.id);

  return useQuery({
    queryKey: ["ProfileNotes", id],
    queryFn: () => GetProfile.notes(id),
    enabled: !!id,
    staleTime: 300000,
    cacheTime: 900000,
  });
}
