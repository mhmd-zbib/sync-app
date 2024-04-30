import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NoteCard from "../../../../../shared/components/ui/cards/NoteCard";

const ContactReminderItem = ({ item }) => {
  return (
    <NoteCard
      date={item.date}
      title={item.title}
      description={item.description}
    />
  );
};

export default ContactReminderItem;

const styles = StyleSheet.create({});
