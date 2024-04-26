import { useQuery } from "@tanstack/react-query";
import ContactsManager from "../../../../../database/databaseServices/ContactsManager";

export const fetchContacts = () => {
  return useQuery({
    queryKey: ["contactNameList"],
    queryFn: () => ContactsManager.getAllContacts(),
  });
};
