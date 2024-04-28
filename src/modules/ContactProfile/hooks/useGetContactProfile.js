import { useQuery } from "@tanstack/react-query";
import GetContactInfoService from "../services/GetContactInfoService";
import useContactIdStore from "../stores/ContactIdStore";

export default function useGetContactProfile() {
  const id = useContactIdStore((state) => state.id);

  return useQuery({
    queryKey: ["contactProfile", id],
    queryFn: () => {
      const info = GetContactInfoService.getInfo(id);
      console.log(info);
      return info;
    },
    enabled: !!id,
    staleTime: 300000,
    cacheTime: 900000,
  });
}
