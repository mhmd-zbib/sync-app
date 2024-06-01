/**
 * Get the month from a Unix timestamp string.
 * @param {string} timestamp The Unix timestamp string.
 * @returns {string} The month as a string (e.g., "January", "February", etc.).
 */
export function getMonthFromUnixTimestamp(timestamp: string): string {
  const date = new Date(parseInt(timestamp) * 1000);
  return date.toLocaleString("en-US", { month: "long" });
}
