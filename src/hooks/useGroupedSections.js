import { useMemo } from "react";

/**
 * Custom hook for creating grouped sections.
 * @param {Array} items - The array of items to group.
 * @param {function} keyExtractor - A function that extracts the key from an item.
 * @param {function} transformKey - Optional function to further transform the extracted key.
 * @returns {Array} An array of grouped sections.
 */
const useGroupedSections = (
  items,
  keyExtractor,
  transformKey = (key) => key
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
      .sort()
      .map((key) => ({
        title: key,
        data: groups[key],
      }));
  }, [items, keyExtractor, transformKey]);
};

export default useGroupedSections;
