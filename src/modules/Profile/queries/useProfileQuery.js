import { useQuery } from "@tanstack/react-query";
import DummyProfile from "../test/DummyProfile";

export function useProfileQuery() {
  return useQuery({
    queryKey: ["Profile"],
    queryFn: () => DummyProfile(),
    staleTime: 300000,
    cacheTime: 900000,
  });
}
