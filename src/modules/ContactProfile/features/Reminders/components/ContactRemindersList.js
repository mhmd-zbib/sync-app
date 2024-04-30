import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactReminderItem from "./ContactReminderItem";

const ContactRemindersList = () => {
  const data = [
    {
      id: 31,
      title: "Remidner one",
      description: "stuff here to add",
      date: 468498414,
    },
  ];

  return (
    <FlatList
      data={data}
      style={{ marginTop: 20, marginHorizontal: 10 }}
      contentContainerStyle={{ gap: 8 }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ContactReminderItem item={item} />}
    />
  );
};

export default ContactRemindersList;

const styles = StyleSheet.create({});
