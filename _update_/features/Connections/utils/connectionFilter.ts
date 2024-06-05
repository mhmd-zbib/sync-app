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
        .filter((item) => item.isTagged)
        .map(({ isPinned, ...rest }) => rest);
    case FilterOptions.Starred:
      return data
        .filter((item) => item.isStarred)
        .map(({ isStarred, isPinned, ...rest }) => rest); // When passing the starred to their place we dont wanna have the star (they arl are starred)
    case FilterOptions.Group:
      return data.filter((item) => item.type === "group");
    default:
      return data.filter((item) => item.type === "contact");
  }
};
