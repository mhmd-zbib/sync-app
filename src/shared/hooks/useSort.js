export class useSort {
  static byName(items, key, ascending = true) {
    return [...items].sort((a, b) => {
      const comparison = a[key].localeCompare(b[key]);
      return ascending ? comparison : -comparison;
    });
  }

  static byDate(items, key, ascending = true) {
    return [...items].sort((a, b) => {
      const comparison = a[key] - b[key];
      return ascending ? comparison : -comparison;
    });
  }

  static byNumber(items, key, ascending = true) {
    return [...items].sort((a, b) => {
      const comparison = a[key] - b[key];
      return ascending ? comparison : -comparison;
    });
  }
}
