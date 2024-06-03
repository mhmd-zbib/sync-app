/**
 * Function that filters the selected options for the ConnectionsList
 */

import { FilterOptions } from "../types/enums";
import { Contact } from "../types/interfaces";

export const filterData = (
  data: Contact[],
  filter: FilterOptions
): Contact[] => {
  switch (filter) {
    case FilterOptions.Tagged:
      return data.filter((item) => item.isTagged);
    case FilterOptions.Starred:
      return data.filter((item) => item.isStarred);
    default:
      return data;
  }
};
