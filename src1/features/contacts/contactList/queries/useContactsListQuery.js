import { useQuery } from "@tanstack/react-query";
import ContactService from "../../../../services/ContactService";

export const useContactListQuery = () => {
  return useQuery({
    queryKey: ["contactNameList"],
    queryFn: () => ContactService.getAllContacts(),
  });
};
