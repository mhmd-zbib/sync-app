import Reminders from "@/__test__/data/Contact-Reminder.json";
import React from "react";
import ContactReminderList from "../components/Contact-Reminder-List";

const ContactReminder = () => {
  return <ContactReminderList reminders={Reminders} />;
};

export default ContactReminder;
