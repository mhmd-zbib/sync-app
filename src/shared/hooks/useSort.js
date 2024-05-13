export default function useSort(items, key, order = "asc") {
  if (!items || items.length === 0) return [];

  const sortOrder = order === "asc" ? 1 : -1;
  const compare = (a, b) => {
    if (typeof a[key] === "string") {
      return a[key].localeCompare(b[key]) * sortOrder;
    }
    return (a[key] - b[key]) * sortOrder;
  };
  return [...items].sort(compare);
} 
