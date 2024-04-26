import { useQuery } from "@tanstack/react-query";
import TagsService from "../../services/TagsService";

export const useTagListQuery = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: () => TagsService.getTags(),
  });
};
