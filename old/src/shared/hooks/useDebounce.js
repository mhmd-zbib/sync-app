import { useState, useEffect } from "react";

/**
 * Custom hook to debounce any fast changing value.
 * The debounced value will only reflect the latest value if no changes have been made
 * for the specified delay period.
 *
 * @param {any} value - The value to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @returns {any} - The debounced value.
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Return a cleanup function that will be called every time useEffect is re-called.
    // useEffect will only be re-called if value or delay changes.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
}
