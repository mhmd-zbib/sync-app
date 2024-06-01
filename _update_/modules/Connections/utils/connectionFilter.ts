/**
 * Function that filters the selected options for the ConnectionsList
 */

import { FilterOptions } from "../types/enums";

interface Contact {
  id: number;
  name: string;
  isTagged: boolean;
  isStarred: boolean;
}

export const filterData = (
  data: Contact[],
  filter: FilterOptions
): Contact[] => {
  if (filter === FilterOptions.Tagged) {
    return data.filter((item) => item.isTagged);
  } else if (filter === FilterOptions.Starred) {
    return data.filter((item) => item.isStarred);
  } else {
    return data;
  }
};
