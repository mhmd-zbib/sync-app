import { useQuery } from "@tanstack/react-query";
import TagService from "../services/TagService";

export function useListTagQuery() {
  return useQuery({
    queryKey: ["TagList"],
    queryFn: () => TagService.list(),
    staleTime: 300000,
    cacheTime: 900000,
  });
}
