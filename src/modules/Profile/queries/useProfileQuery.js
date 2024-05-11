import { useQuery } from "@tanstack/react-query";
import DummyProfile from "../test/DummyProfile";

export function useProfileQuery(id) {
  return useQuery({
    queryKey: ["Profile", id],
    queryFn: () => DummyProfile(id),
    staleTime: 300000,
    cacheTime: 900000,
  });
}
