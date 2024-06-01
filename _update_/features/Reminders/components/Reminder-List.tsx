import data from "@/__test__/data/Reminders.json";
import React from "react";
import { SectionList } from "react-native";
import ReminderListItem from "./Reminder-List-Item";

import ThemedText from "@/components/ThemedText";
import { convertToSectionListFormat } from "@/utils/convertToSectionListFormat";

const ReminderList = () => {
  const sectionedListData = convertToSectionListFormat(data, "title");

  return (
    <SectionList
      renderSectionHeader={({ section: { title } }) => (
        <ThemedText>{title}</ThemedText>
      )}
      sections={sectionedListData}
      renderItem={({ item }) => (
        <ReminderListItem reminder={item} onPress={() => {}} />
      )}
    />
  );
};

export default ReminderList;
