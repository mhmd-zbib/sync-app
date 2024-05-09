import { useQuery } from "@tanstack/react-query";
import GroupServices from "../services/GroupServices";

export function useGroupDetailsQuery(groupId) {
  return useQuery({
    queryKey: ["GroupList", groupId],
    queryFn: () => GroupServices.getDetails(groupId),
    staleTime: 300000,
    cacheTime: 900000,
  });
}
