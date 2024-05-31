import { useEffect, useState } from "react";

/**
 * Debounces a value by delaying updates until a specified time has elapsed without further updates.
 *
 * @param value - The value to debounce.
 * @param delay - The delay in milliseconds.
 * @returns The debounced value.
 */
const useDebounce = <T,>(value: T, delay: number): T => {
  // State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set timeout id for debounce mechanism
    const timeoutId = setTimeout(() => {
      // Update debounced value after delay
      setDebouncedValue(value);
    }, delay);

    // Clear timeout on cleanup to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
