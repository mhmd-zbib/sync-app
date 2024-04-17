export class useSort {
  static byName(items, key) {
    return [...items].sort((a, b) => a[key].localeCompare(b[key]));
  }

  static byDate(items, key) {
    return items.sort((a, b) => a[key] - b[key]);
  }

  static byNumber(items, key) {
    return [...items].sort((a, b) => a[key] - b[key]);
  }
}
