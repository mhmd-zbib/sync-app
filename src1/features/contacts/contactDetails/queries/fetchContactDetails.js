import ContactsService from "../../../../services/ContactService";
import { useQuery } from "@tanstack/react-query";

export const fetchContactDetails = (userId) => {
  return useQuery({
    queryKey: ["contactDetails"],
    queryFn: () => ContactsService.getContactDetails(userId),
  });
};
