import { useState, useMemo } from "react";

const useSearch = (items, searchTerm, key) => {
  const [filteredResults, setFilteredResults] = useState([]);

  const results = useMemo(() => {
    if (!searchTerm.trim()) return items;
    const lowercasedTerm = searchTerm.toLowerCase();
    return items.filter((item) =>
      item[key]?.toLowerCase().includes(lowercasedTerm)
    );
  }, [items, searchTerm, key]);

  useMemo(() => {
    setFilteredResults(results);
  }, [results]);

  return filteredResults;
};

export default useSearch;
