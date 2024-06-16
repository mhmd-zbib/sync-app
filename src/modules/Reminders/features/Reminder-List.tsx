/**
 * Landing page of the application with the reminders
 * The header hides on scroll and reappears and works well
 */

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
  return (
    <SectionList
      contentContainerStyle={{ marginHorizontal: 10, marginTop: -24 }}
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
