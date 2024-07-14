import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import data from "@/__test__/data/Notes.json";

export const getContactRemindersQueryOptions = (contactId: any) => {
  return queryOptions({
    queryKey: ["contact-reminders", contactId],
    queryFn: () => {
      return data;
    },
  });
};

type UseContactRemindersOptions = {
  contactId: any;
  queryConfig?: QueryConfig<typeof getContactRemindersQueryOptions>;
};

export const useContactReminders = ({
  contactId,
  queryConfig,
}: UseContactRemindersOptions) => {
  return useQuery({
    ...getContactRemindersQueryOptions(contactId),
    ...queryConfig,
  });
};
