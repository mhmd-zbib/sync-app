import { useQuery } from "@tanstack/react-query";
import useProfileIdStore from "../store/useProfileIdStore";
import ContactService from "../../Contacts/services/ContactService";
import ExperienceService from "../../Experience/services/ExperienceService";

export function useProfileQuery(id) {
  return useQuery({
    queryKey: ["Profile", id],
    queryFn: async () => ContactService.getInfo(id),
    staleTime: 300000,
    cacheTime: 900000,
  });
}
