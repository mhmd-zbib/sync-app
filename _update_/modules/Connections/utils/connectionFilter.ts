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
      return data
        .filter((item) => item.tag)
        .map(({ isPinned, ...rest }) => rest);
    case FilterOptions.unTagged:
      return data
        .filter((item) => !item.tag && item.type === "contact")
        .map(({ isPinned, ...rest }) => rest);
    case FilterOptions.Starred:
      return data
        .filter((item) => item.isStarred)
        .map(({ isStarred, isPinned, ...rest }) => rest);
    case FilterOptions.Group:
      return data.filter((item) => item.type === "group");
    default:
      return data.filter((item) => item.type === "contact");
  }
};
