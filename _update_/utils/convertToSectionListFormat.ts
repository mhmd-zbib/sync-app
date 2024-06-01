interface InputData {
  id: number;
  title: string;
  details: string;
  date: string;
}

interface TransformedData {
  title: string;
  data: InputData[];
}

export function convertToSectionListFormat(
  inputData: InputData[],
  filterField: keyof InputData
): TransformedData[] {
  const groupedData: { [key: string]: InputData[] } = {};

  inputData.forEach((item) => {
    const fieldValue = item[filterField];
    if (!groupedData[fieldValue]) {
      groupedData[fieldValue] = [];
    }
    groupedData[fieldValue].push(item);
  });

  const transformedData: TransformedData[] = Object.keys(groupedData).map(
    (key) => ({
      title: key.toString(),
      data: groupedData[key],
    })
  );

  return transformedData;
}
