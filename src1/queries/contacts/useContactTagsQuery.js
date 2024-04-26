import { useQuery } from "@tanstack/react-query";
import ContactsService from "../../services/ContactService";

export const useContactTagsQuery = () => {
  return useQuery({
    queryKey: ["contactTags"],
    queryFn: () => ContactsService.getContactTags(),
  });
};
