/**
 * Landing page of the application with the reminders
 * The header hides on scroll and reappears and works well
 */

import AnimatedHeader from "@/components/AnimatedHeader";
import SearchInput from "@/components/SearchInput";
import { getMonthFromUnixTimestamp } from "@/utils/date-utils";
import { convertToSectionListFormat } from "@/utils/to-sectionlist";
import React, { useState } from "react";
import { Animated, SectionList } from "react-native";
import ReminderListItem from "./Reminder-List-Item";
import ReminderListSection from "./Reminder-List-Section";
import useSearch from "@/hooks/useSearch";
import { formatMonthYear, formatShortDate } from "@/utils/format-date";

const HEADER_HEIGHT = 70;

interface ReminderListProps {
  reminders: RemindersType[];
}

const ReminderList = ({ reminders }: ReminderListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchable = useSearch(reminders, searchTerm, (item) => item.title);
  const sectionedListData = convertToSectionListFormat<RemindersType>(
    reminders,
    (item) => formatMonthYear(item.date)
  );
  const scrollY = new Animated.Value(0);

  return (
    <>
      <AnimatedHeader scrollY={scrollY} headerHeight={HEADER_HEIGHT}>
        <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
      </AnimatedHeader>

      <SectionList
        overScrollMode="never"
        alwaysBounceVertical={false}
        bouncesZoom={false}
        invertStickyHeaders
        stickyHeaderHiddenOnScroll={false}
        renderSectionHeader={({ section: { title } }) => (
          <ReminderListSection title={title} />
        )}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT - 24 }}
        sections={sectionedListData}
        renderItem={({ item }) => <ReminderListItem reminder={item} />}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      />
    </>
  );
};

export default ReminderList;
