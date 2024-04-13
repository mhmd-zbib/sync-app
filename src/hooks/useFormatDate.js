export function useFormatMonthYear(timestamp) {
  const date = new Date(parseInt(timestamp));
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  return `${formattedMonth}-${year}`;
}

export function useFormatTimeDayMonth(timestamp) {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  return `${hours}:${minutes} ${ampm}, ${day} ${month}`;
}
