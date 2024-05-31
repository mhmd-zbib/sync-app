/**
 * Getting all contacts list using react query, this calls the service "GetContactService"
 */

import { useQuery } from "@tanstack/react-query";
import ContactService from "../../../services/ContactService";

export default function useGetContacts() {
  return useQuery({
    queryKey: ["ContactList"],
    queryFn: () => ContactService.getAllContacts(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
}
