import { useQuery } from "@tanstack/react-query";
import GetContactService from "../services/GetContactService";

export default function useGetContacts() {
  return useQuery({
    queryKey: ["contactNameList"],
    queryFn: () => GetContactService(),
  });
}
