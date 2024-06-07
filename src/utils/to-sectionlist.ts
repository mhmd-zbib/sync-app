/**
 * Converts an array of input data into a section list format, grouping the data based on a specified key.
 * @param inputData Array of input data to be transformed.
 * @param getKey Function to extract the key dynamically from each item.
 * @returns An array of transformed data in section list format.
 */
export function convertToSectionListFormat<T>(
  inputData: T[],
  getKey: (item: T) => any
): { title: string; data: T[] }[] {
  const groupedData: { [key: string]: T[] } = {};

  inputData.forEach((item) => {
    const fieldValue = getKey(item);
    if (!groupedData[fieldValue]) {
      groupedData[fieldValue] = [];
    }
    groupedData[fieldValue].push(item);
  });

  return Object.keys(groupedData).map((key) => ({
    title: key.toString(),
    data: groupedData[key],
  }));
}
