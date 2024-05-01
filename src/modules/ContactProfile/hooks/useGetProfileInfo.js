import { useQuery } from "@tanstack/react-query";
import ProfileService from "../services/ProfileService";
import useContactIdStore from "../stores/ContactIdStore";

export default function useGetProfileInfo() {
  const id = useContactIdStore((state) => state.id);

  return useQuery({
    queryKey: ["ProfileInfo", id],
    queryFn: () => {
      const info = ProfileService.getInfo(id);
      console.log(info);
      return info;
    },
    enabled: !!id,
    staleTime: 300000,
    cacheTime: 900000,
  });
}
