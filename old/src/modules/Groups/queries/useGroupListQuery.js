import { useQuery } from "@tanstack/react-query";
import GroupServices from "../services/GroupServices";

export function useGroupListQuery() {
  return useQuery({
    queryKey: ["GroupList"],
    queryFn: () => GroupServices.list(),
    staleTime: 300000,
    cacheTime: 900000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
}
