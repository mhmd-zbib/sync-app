import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";
import data from "@/__test__/data/Groups.json";

const fetchContactGroups = (contactId: any) => {
  return data;
};

export const getContactGroupsQueryOptions = (contactId: any) => {
  return queryOptions({
    queryKey: ["contact-notes", contactId],
    queryFn: () => {
      fetchContactGroups(contactId);
    },
  });
};

type UseContactGroupsOptions = {
  contactId: any;
  queryConfig?: QueryConfig<typeof getContactGroupsQueryOptions>;
};

export const useContactGroups = ({
  contactId,
  queryConfig,
}: UseContactGroupsOptions) => {
  return useQuery({
    ...getContactGroupsQueryOptions(contactId),
    ...queryConfig,
  });
};
