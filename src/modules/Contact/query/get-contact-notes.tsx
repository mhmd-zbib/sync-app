import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import data from "@/__test__/data/Notes.json";

export const getContactNotesQueryOptions = (contactId: any) => {
  return queryOptions({
    queryKey: ["contact-notes", contactId],
    queryFn: () => {
      return data;
    },
  });
};

type UseContactNotesOptions = {
  contactId: any;
  queryConfig?: QueryConfig<typeof getContactNotesQueryOptions>;
};

export const useContactNotes = ({
  contactId,
  queryConfig,
}: UseContactNotesOptions) => {
  return useQuery({
    ...getContactNotesQueryOptions(contactId),
    ...queryConfig,
  });
};
