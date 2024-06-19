/**
 * Landing page of the application with the reminders
 * The header hides on scroll and reappears and works well
 */

import EmptyList from "@/components/Empty-List";
import React from "react";
import { SectionList, SectionListProps } from "react-native";
import { ReminderListSection } from "../components/Reminder-List-Section";
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
      invertStickyHeaders
      stickyHeaderHiddenOnScroll={false}
      renderSectionHeader={({ section }) => (
        <ReminderListSection title={section.title} />
      )}
      sections={data}
      renderItem={({ item, index }) => <ReminderListItem reminder={item} />}
    />
  );
};

export default ReminderList;
