import { useQuery } from "@tanstack/react-query";
import GroupServices from "../services/GroupServices";

export function useGroupContactsQuery(groupId) {
  return useQuery({
    queryKey: ["GroupContacts", groupId],
    queryFn: () => GroupServices.getContacts(groupId),
    staleTime: 300000,
    cacheTime: 900000,
  });
}
