// Format: 28 September
export function formatDayMonth(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
  return date.toLocaleDateString("en-US", options);
}

// Format: 10:00 am
export function formatHourMinute(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  } as Intl.DateTimeFormatOptions;
  return date.toLocaleTimeString("en-US", options);
}

// Format: August 11, 2023; 10:00 PM
export function formatFullDateTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",

    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}

// Format: 8 Aug 2023
export function formatShortDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);

  // Get the day, month, and year from the date object
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" }); // Get short month name
  const year = date.getFullYear();

  // Concatenate the components to form the desired format
  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}

// Format: 31/5/2024
export function formatDateDMY(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function formatMonthYear(timestamp: number): string {
  const date = new Date(timestamp * 1);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    // day: "numeric",
    year: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",

    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}
