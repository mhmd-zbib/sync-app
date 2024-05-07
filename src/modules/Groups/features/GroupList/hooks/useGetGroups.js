import { useQuery } from "@tanstack/react-query";
import GroupServices from "../../../services/GroupServices";

export default function getGroups() {
  return useQuery({
    queryKey: ["GroupList"],
    queryFn: () => GroupServices.list(),
  });
}
