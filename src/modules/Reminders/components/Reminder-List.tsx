/**
 * Landing page of the application with the reminders
 * The header hides on scroll and reappears and works well
 */

import EmptyList from "@/components/ui/Empty-List";
import React from "react";
import { SectionList, SectionListProps } from "react-native";
import { ReminderListSection } from "./Reminder-List-Section";
import ReminderListItem from "./Reminder-Item";

interface ReminderSectionData {
  title: string;
  data: RemindersType[];
}

interface ReminderList extends SectionListProps<RemindersType> {
  data: ReminderSectionData[];
}

const ReminderList = ({ data }: ReminderList) => {
  if (!data || data.length === 0) {
    return <EmptyList message="No reminders assigned!" />;
  }

  return (
    <SectionList
      overScrollMode="never"
      alwaysBounceVertical={false}
      bouncesZoom={false}
      stickyHeaderHiddenOnScroll={false}
      renderSectionHeader={({ section }) => (
        <ReminderListSection title={section.title} />
      )}
      contentContainerStyle={{ gap: 10 }}
      sections={data}
      renderItem={({ item }) => <ReminderListItem reminder={item} />}
    />
  );
};

export default ReminderList;
