/**
 * Function that filters the selected options for the ConnectionsList
 */

import { FilterOptions } from "../types/enums";
import { Connections } from "../types/interfaces";

export const filterData = (
  data: Connections[],
  filter: FilterOptions
): Connections[] => {
  switch (filter) {
    case FilterOptions.Tagged:
      return data.filter((item) => item.isTagged);
    case FilterOptions.Starred:
      return data.filter((item) => item.isStarred);
    case FilterOptions.Group:
      return data.filter((item) => item.type === "group");
    default:
      return data.filter((item) => item.type === "contact");
  }
};
