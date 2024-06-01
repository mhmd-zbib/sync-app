import { useMemo } from "react";
import useDebounce from "./useDebounce";

interface Item {
  [key: string]: any;
}

type KeyExtractorFn = (item: Item) => any;

const useSearch = <T extends Item>(
  items: T[],
  searchTerm: string,
  keyExtractor: KeyExtractorFn,
  debounceDelay: number = 300
): T[] => {
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

  return useMemo(() => {
    if (!Array.isArray(items)) {
      throw new Error("'items' must be an array.");
    }
    if (typeof searchTerm !== "string") {
      throw new Error("'searchTerm' must be a string.");
    }
    if (typeof keyExtractor !== "function") {
      throw new Error("'keyExtractor' must be a function.");
    }

    if (!debouncedSearchTerm.trim()) {
      return items;
    }

    const lowercasedTerm = debouncedSearchTerm.toLowerCase();
    const filteredItems = items.filter((item) =>
      keyExtractor(item)?.toString().toLowerCase().includes(lowercasedTerm)
    );

    return filteredItems;
  }, [items, debouncedSearchTerm, keyExtractor]);
};

export default useSearch;
