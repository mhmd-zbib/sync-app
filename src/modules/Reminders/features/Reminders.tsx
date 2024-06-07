import reminders from "@/__test__/data/Reminders.json";
import React from "react";
import ReminderList from "../components/Reminder-List";

const Reminders = () => {
  return <ReminderList reminders={reminders} />;
};

export default Reminders;
