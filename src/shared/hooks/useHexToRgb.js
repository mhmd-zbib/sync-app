export function hexToRGBA(hex, alpha) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  console.log(r, g, b);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
