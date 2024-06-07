/**
 *  Contact Reminders feature, gets reminders for the contact, filters them and gets them ready for the list
 */

import reminders from "@/__test__/data/Contact-Reminder.json";
import { convertToSectionListFormat } from "@/utils/to-sectionlist";
import React, { useState } from "react";
import ContactReminderList from "../components/Contact-Reminder-List";
import { formatDayMonth } from "@/utils/format-date";
import SearchInput from "@/components/SearchInput";
import useSearch from "@/hooks/useSearch";

const ContactReminders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const search = useSearch(reminders, searchTerm, (item) => item.title);
  const sectionedListData = convertToSectionListFormat(search, (item) =>
    formatDayMonth(item.date)
  );

  return (
    <>
      <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
      <ContactReminderList reminders={sectionedListData} />
    </>
  );
};
export default ContactReminders;
