import data from "@/__test__/data/Reminders.json";
import React from "react";
import { SectionList, View } from "react-native";
import ReminderListItem from "./Reminder-List-Item";
import ThemedText from "@/components/ThemedText";
import { getMonthFromUnixTimestamp } from "@/utils/date-utils";
import { convertToSectionListFormat } from "@/utils/to-sectionlist";
import SearchInput from "@/components/SearchInput";

const ReminderList = () => {
  const sectionedListData = convertToSectionListFormat<Reminder>(data, (item) =>
    getMonthFromUnixTimestamp(item.date)
  );

  return (
    <View style={{ gap: 10 }}>
      <SearchInput />
      <SectionList
        invertStickyHeaders
        stickyHeaderHiddenOnScroll={false}
        renderSectionHeader={({ section: { title } }) => (
          <ThemedText>{title}</ThemedText>
        )}
        sections={sectionedListData}
        renderItem={({ item }) => (
          <ReminderListItem reminder={item} onPress={() => {}} />
        )}
      />
    </View>
  );
};

export default ReminderList;
