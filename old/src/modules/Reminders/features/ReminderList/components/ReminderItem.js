import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../../../../shared/components/ui/Typography";
import ItemCard from "../../../../../shared/components/ui/cards/Card";
import NoteCard from "../../../../../shared/components/ui/cards/NoteCard";

const ReminderItem = ({ item }) => {
  return (
    <NoteCard
      title={item.title}
      date={item.created_at}
      description={item.details}
    />
  );
};

export default ReminderItem;

const styles = StyleSheet.create({});
