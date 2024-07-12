import data from "@/__test__/data/Groups.json";
import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

const fetchContactGroups = (contactId: any) => {
  return data;
};

export const groupQueryOptions = (contactId: any) => {
  return queryOptions({
    queryKey: ["contact-notes", contactId],
    queryFn: () => {
      fetchContactGroups(contactId);
    },
  });
};

type UseContactGroupsOptions = {
  contactId: any;
  queryConfig?: QueryConfig<typeof groupQueryOptions>;
};

export const useContactGroups = ({
  contactId,
  queryConfig,
}: UseContactGroupsOptions) => {
  return useQuery({
    ...groupQueryOptions(contactId),
    ...queryConfig,
  });
};

function getGroups() {}

function getGroup() {}

export const groupQuery = {
  getGroups,
  getGroup,
};
