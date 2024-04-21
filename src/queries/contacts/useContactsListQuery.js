import { useQuery } from "@tanstack/react-query";
import ContactsService from "../../services/ContactService";

export const useContactListQuery = () => {
  return useQuery({
    queryKey: ["contactNameList"],
    queryFn: () => ContactsService.getAllContacts(),
  });
};
