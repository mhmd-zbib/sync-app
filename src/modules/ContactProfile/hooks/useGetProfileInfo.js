import { useQuery } from "@tanstack/react-query";
import GetProfile from "../services/GetProfile";
import useContactIdStore from "../stores/ContactIdStore";

export default function useGetProfileInfo() {
  const id = useContactIdStore((state) => state.id);

  return useQuery({
    queryKey: ["ProfileInfo", id],
    queryFn: () => {
      const info = GetProfile.info(id);
      console.log(info);
      return info;
    },
    enabled: !!id,
    staleTime: 300000,
    cacheTime: 900000,
  });
}
