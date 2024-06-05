import React, { FC } from "react";
import { FlatList } from "react-native";
import ContactReminderItem from "./Contact-Reminder-Item";

interface ContactReminderListProps {
  reminders: ContactReminderType[];
}

const ContactReminderList: FC<ContactReminderListProps> = ({ reminders }) => {
  return (
    <FlatList
      scrollEnabled={false}
      renderItem={({ item }) => <ContactReminderItem reminder={item} />}
      data={reminders}
      contentContainerStyle={{ gap: 16 }}
    />
  );
};

export default ContactReminderList;
