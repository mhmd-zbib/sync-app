import data from "@/__test__/data/Contacts.json";
import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getContactQueryOptions = () => {
  return queryOptions({
    queryKey: ["discussions"],
    queryFn: () => {
      return data;
    },
  });
};

type UseContactsOptions = {
  queryConfig?: QueryConfig<typeof getContactQueryOptions>;
};

export const useContacts = ({ queryConfig }: UseContactsOptions = {}) => {
  return useQuery({
    ...getContactQueryOptions(),
    ...queryConfig,
  });
};
