import { useMemo } from "react";
import { useDebounce } from "./useDebounce";

/**
 * Enhanced useSearch hook that includes debouncing to improve performance during search operations.
 * Filters an array of objects based on a debounced search term applied to a specified object key.
 *
 * @param {Array} items - The array of objects to be searched.
 * @param {string} searchTerm - The term to search for within the objects' specified key.
 * @param {string} key - The key in each object that should be searched against.
 * @param {number} debounceDelay - The delay in milliseconds for the debounce mechanism.
 *
 * @returns {Array} - An array of objects from 'items' that match the search criteria.
 */
const useSearch = (items, searchTerm, key, debounceDelay = 300) => {
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

  return useMemo(() => {
    if (
      !Array.isArray(items) ||
      typeof searchTerm !== "string" ||
      typeof key !== "string"
    ) {
      return [];
    }

    if (!debouncedSearchTerm.trim()) {
      return items;
    }

    const lowercasedTerm = debouncedSearchTerm.toLowerCase();
    const filteredItems = items.filter(
      (item) =>
        item.hasOwnProperty(key) &&
        item[key]?.toString().toLowerCase().includes(lowercasedTerm)
    );

    // Return empty array if no items match or if the key is not found
    return filteredItems.length > 0 ? filteredItems : [];
  }, [items, debouncedSearchTerm, key]);
};

export default useSearch;
