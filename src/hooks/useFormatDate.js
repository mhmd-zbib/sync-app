class DateTimeFormatter {
  static monthNames = [
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

  static formatMonthYear(timestamp) {
    const date = new Date(parseInt(timestamp));
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const formattedMonth = DateTimeFormatter.monthNames[monthIndex];
    return `${formattedMonth} ${year}`;
  }

  static formatTimeDayMonth(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert hour '0' to '12'
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const day = date.getDate();
    const month = DateTimeFormatter.monthNames[date.getMonth()];
    return `${hours}:${minutes} ${ampm}, ${day} ${month}`;
  }

  static formatFullDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = DateTimeFormatter.monthNames[monthIndex].substring(0, 3);
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
}

export default DateTimeFormatter;
