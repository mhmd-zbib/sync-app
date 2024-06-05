import ThemedText from "@/components/ThemedText";
import React, { FC } from "react";
import { SectionList } from "react-native";
import ContactReminderItem from "./Contact-Reminder-Item";
import ContactReminderSection from "./Contact-Reminder-Section";

interface ContactReminderListProps {
  title: string;
  data: ContactReminderType[];
}

interface ContactReminderSectionProps {
  reminders: ContactReminderListProps[];
}

const ContactReminderList: FC<ContactReminderSectionProps> = ({
  reminders,
}) => {
  const sections = reminders.map((reminder) => ({
    title: reminder.title,
    data: reminder.data,
  }));

  return (
    <SectionList
      renderSectionHeader={({ section: { title } }) => (
        <ContactReminderSection section={title} />
      )}
      scrollEnabled={false}
      renderItem={({ item }) => <ContactReminderItem reminder={item} />}
      sections={sections}
      // contentContainerStyle={{ gap: 8 }}
    />
  );
};

export default ContactReminderList;
