import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

const data = [
  { label: "S", value: 23 },
  { label: "M", value: 20 },
  { label: "W", value: 47 },
  { label: "T", value: 17 },
  { label: "Th", value: 80 },
  { label: "F", value: 34 },
  { label: "S", value: 23 },
];

export const gerCreatedRemindersOptions = () => {
  return queryOptions({
    queryKey: ["reminders-created"],
    queryFn: () => {
      return data;
    },
  });
};

type UseContactsOptions = {
  queryConfig?: QueryConfig<typeof gerCreatedRemindersOptions>;
};

export const useRemindersCreated = ({ queryConfig }: UseContactsOptions) => {
  return useQuery({
    ...gerCreatedRemindersOptions(),
    ...queryConfig,
  });
};
