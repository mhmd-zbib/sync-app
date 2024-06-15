/**
 * Landing page of the application with the reminders
 * The header hides on scroll and reappears and works well
 */

import reminders from "@/__test__/data/Reminders.json";
import AnimatedHeader from "@/components/AnimatedHeader";
import SearchInput from "@/components/SearchInput";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import useSearch from "@/hooks/useSearch";
import { formatMonthYear } from "@/utils/format-date";
import { convertToSectionListFormat } from "@/utils/to-sectionlist";
import React, { useState } from "react";
import { Animated, SectionList, View } from "react-native";
import ReminderListItem from "./Reminder-Item";

const HEADER_HEIGHT = 70;

interface ReminderListProps {
  reminders: RemindersType[];
}

const ReminderListSection = ({ title }: { title: string }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginBottom: 8,
        marginTop: 24,
      }}>
      <ThemedText size={16} variant="accent">
        {title}
      </ThemedText>
      <View
        style={{
          backgroundColor: theme.accent,
          height: 1,
          width: "100%",
        }}
      />
    </View>
  );
};

const ReminderList = () => {
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
