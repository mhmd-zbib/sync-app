import { useMemo } from "react";

/**
 * Custom hook for filtering and sorting group sections.
 * @param {Array} items - The array of items to group.
 * @param {function} keyExtractor - Function that extracts the key from an item.
 * @param {function} transformKey - Optional function to transform the extracted key.
 * @param {function} sortFunction - Optional function to sort the grouped sections.
 * @returns {Array} - An array of grouped and sorted sections.
 *
 * @example
 *  Grouping by date of birth and sorting by the number of items in each group
 * const sortedSections = useGroupedSections(
 *   people,
 *   item => item.dob,
 *   undefined,
 *   (a, b) => b.data.length - a.data.length
 * );
 */
const useGroupedSections = (
  items,
  keyExtractor,
  transformKey = (key) => key,
  sortFunction = (a, b) => a.title.localeCompare(b.title)
) => {
  return useMemo(() => {
    const groups = items.reduce((sections, item) => {
      const key = transformKey(keyExtractor(item)).toUpperCase();
      if (!sections[key]) {
        sections[key] = [];
      }
      sections[key].push(item);
      return sections;
    }, {});

    return Object.keys(groups)
      .sort((key1, key2) =>
        sortFunction(
          {
            title: key1,
            data: groups[key1],
          },
          {
            title: key2,
            data: groups[key2],
          }
        )
      )
      .map((key) => ({
        title: key,
        data: groups[key],
      }));
  }, [items, keyExtractor, transformKey, sortFunction]);
};

export default useGroupedSections;
