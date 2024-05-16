import { useQuery } from "@tanstack/react-query";
import useProfileIdStore from "../store/useProfileIdStore";
import ContactService from "../../Contacts/services/ContactService";
import ExperienceService from "../../Experience/services/ExperienceService";

export function useProfileQuery(id) {
  return useQuery({
    queryKey: ["Profile", id],
    queryFn: async () => {
      const info = await ContactService.getInfo(id);

      return info;
    },
  });
}
