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
    if (!timestamp || isNaN(timestamp)) {
      throw new Error("Invalid timestamp provided");
    }
    const date = new Date(parseInt(timestamp));
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const formattedMonth = DateTimeFormatter.monthNames[monthIndex];
    return `${formattedMonth} ${year}`;
  }

  static formatTimeDayMonth(timestamp) {
    if (!timestamp || isNaN(timestamp)) {
      throw new Error("Invalid timestamp provided");
    }
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

  static formatTimeDayMonthYear(timestamp) {
    // if (!timestamp || isNaN(timestamp)) {
    //   return "Invalid timestamp provided";
    // }
    const date = new Date(timestamp);
    let hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const day = date.getDate();
    const year = date.getFullYear();
    const month = DateTimeFormatter.monthNames[date.getMonth()];
    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
  }

  static formatFullDate(timestamp) {
    if (!timestamp || isNaN(timestamp)) {
      return "Invalid timestamp provided";
    }
    const date = new Date(timestamp);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = DateTimeFormatter.monthNames[monthIndex].substring(0, 3);
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  static fromISOtoUTC(dateString) {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    const timestamp = date.getTime();
    return timestamp;
  }
}

export default DateTimeFormatter;
