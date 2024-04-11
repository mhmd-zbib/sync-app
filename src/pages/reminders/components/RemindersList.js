import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReminderItem from "./ReminderItem";

const RemindersList = () => {
  const mockData = [
    {
      title: "Reminder 1",
      description: " Stuff to be here",
      dateTime: "18680000",
      tags: [1, 2, 3, 4],
    },
    {
      title: "Stuff 1",
      description: " Stuff to be here",
      dateTime: "18680000",
      tags: [1, 2, 3, 4],
    },
    {
      title: "House 1",
      description: " Stuff to be here",
      dateTime: "18680000",
      tags: [1, 2, 3, 4],
    },
    {
      title: "Car 1",
      description: " Stuff to be here",
      dateTime: "18680000",
      tags: [1, 2, 3, 4],
    },
  ];

  return (
    <View>
      <FlatList
        data={mockData}
        renderItem={({ item }) => <ReminderItem item={item} />}
      />
    </View>
  );
};

export default RemindersList;

const styles = StyleSheet.create({});
