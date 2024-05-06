import { useMemo } from "react";

/**
 * Custom hook for filtering and grouping group sections.
 * @param {Array} items - The array of items to group.
 * @param {function} keyExtractor - Function that extracts the key from an item.
 * @param {function} transformKey - Optional function to transform the extracted key.
 * @returns {Array} - An array of grouped sections.
 *
 * @example
 * Grouping by date of birth:
 * const sections = useGroupedSections(
 *   people,
 *   item => item.dob
 * );
 */
const useGroupedSections = (
  items,
  keyExtractor,
  transformKey = (key) => key
) => {
  return useMemo(() => {
    const groups = items.reduce((sections, item) => {
      const key = transformKey(keyExtractor(item));

      if (!sections[key]) {
        sections[key] = [];
      }
      sections[key].push(item);
      return sections;
    }, {});

    return Object.keys(groups).map((key) => ({
      title: key,
      data: groups[key],
    }));
  }, [items, keyExtractor, transformKey]);
};

export default useGroupedSections;
