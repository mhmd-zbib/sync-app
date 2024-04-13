import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReminderItem from "./ReminderItem";
import RemindersSection from "./RemindersSection";
import useGroupedSections from "../../../hooks/useGroupedSections";
import { useSort } from "../../../hooks/useSort";
import useFormatDateTime from "../../../hooks/useFormatDate";
import Typography from "../../../components/Text.js/Typography";
import DateTimeFormatter from "../../../hooks/useFormatDate";

const RemindersList = () => {
  const mockData = [
    {
      title: "Reminder 1",
      description: " Stuff to be here",
      dateTime: 1592205987550,
      tags: [1, 2, 3, 4],
    },
    {
      title: "Stuff 1",
      description: " Stuff to be here",
      dateTime: 1593205987550,
      tags: [1, 2, 3, 4],
    },
    {
      title: "House 1",
      description: " Stuff to be here",
      dateTime: 1712923871309,
      tags: [1, 2, 3, 4],
    },
    {
      title: "Car 1",
      description: "Stuff to be hesrses",
      dateTime: 18680000,
      tags: [1, 2, 3, 4],
    },
  ];

  const sort = useSort.byDate(mockData, "dateTime");
  const sections = useGroupedSections(sort, (item) =>
    DateTimeFormatter.formatMonthYear(item.dateTime)
  );

  return (
    <View>
      <SectionList
        contentContainerStyle={{ gap: 8 }}
        sections={sections}
        renderItem={({ item }) => <ReminderItem item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <RemindersSection dateTime={title} />
        )}
      />
    </View>
  );
};

export default RemindersList;

const styles = StyleSheet.create({});
