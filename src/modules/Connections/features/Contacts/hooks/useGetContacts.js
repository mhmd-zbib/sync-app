/**
 * Getting all contacts list using react query, this calls the service "GetContactService"
 */

import { useQuery } from "@tanstack/react-query";
import GetContactService from "../../../services/GetContactService";

export default function useGetContacts() {
  return useQuery({
    queryKey: ["ContactList"],
    queryFn: () => GetContactService.getAllContacts(),
  });
}
