import { useMemo } from "react";
import useDebounce from "./useDebounce";

interface Item {
  [key: string]: any;
}

/**
 * Enhanced useSearch hook that includes debouncing to improve performance during search operations.
 * Filters an array of objects based on a debounced search term applied to a specified object key.
 *
 * @param {Item[]} items - The array of objects to be searched.
 * @param {string} searchTerm - The term to search for within the objects.
 * @param {(item: Item) => any} keyExtractor - A function that extracts the value to search against from each item.
 * @param {number} debounceDelay - The delay in milliseconds for the debounce mechanism.
 *
 * @returns {Item[]} - An array of objects from 'items' that match the search criteria.
 */
const useSearch = (
  items: Item[],
  searchTerm: string,
  keyExtractor: (item: Item) => any,
  debounceDelay: number = 300
): Item[] => {
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

  return useMemo(() => {
    if (
      !Array.isArray(items) ||
      typeof searchTerm !== "string" ||
      typeof keyExtractor !== "function"
    ) {
      return [];
    }

    if (!debouncedSearchTerm.trim()) {
      return items;
    }

    const lowercasedTerm = debouncedSearchTerm.toLowerCase();
    const filteredItems = items.filter((item) =>
      keyExtractor(item)?.toString().toLowerCase().includes(lowercasedTerm)
    );

    return filteredItems.length > 0 ? filteredItems : [];
  }, [items, debouncedSearchTerm, keyExtractor]);
};

export default useSearch;
