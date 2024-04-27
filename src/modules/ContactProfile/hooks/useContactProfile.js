import { useQuery } from "@tanstack/react-query";
import GetContactInfoService from "../services/GetContactInfoService";

export default function useContactProfile(id) {
  return useQuery({
    queryKey: ["contactProfile", id],
    queryFn: () => GetContactInfoService.getInfo(id),
    enabled: !!id,
    onSuccess: () => {
      console.log("this is the data from the query");
    },
  });
}
