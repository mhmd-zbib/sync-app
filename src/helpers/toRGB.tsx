export function colorToRGBA(hex: string, opacity: number): string {
  // Remove the # if it's included
  const hexWithoutHash = hex.replace("#", "");

  // Parse the hexadecimal string into individual RGB values
  const r = parseInt(hexWithoutHash.substring(0, 2), 16);
  const g = parseInt(hexWithoutHash.substring(2, 4), 16);
  const b = parseInt(hexWithoutHash.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
}
