import { useQuery } from "@tanstack/react-query";
import DummyProfile from "../test/DummyProfile";
import useProfileIdStore from "../store/useProfileIdStore";
import ContactService from "../../Contacts/services/ContactService";

export function useProfileQuery(id) {
  return useQuery({
    queryKey: ["Profile", id],
    queryFn: () => {
      return ContactService.getInfo(id);
    },
  });
}
