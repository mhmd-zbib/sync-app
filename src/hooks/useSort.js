const useSort = {
  byKey: function (array, key, order = "asc") {
    return array.sort((a, b) => {
      let valueA = a[key];
      let valueB = b[key];

      // Convert to uppercase if values are strings to ensure case-insensitive comparison
      if (typeof valueA === "string" && typeof valueB === "string") {
        valueA = valueA.toUpperCase();
        valueB = valueB.toUpperCase();
      }

      // Compare values for sorting
      if (valueA < valueB) {
        return order === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    });
  },
};
