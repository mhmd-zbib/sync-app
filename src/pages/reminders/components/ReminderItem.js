import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryCard from "../../../components/cards/PrimaryCard";

const ReminderItem = ({ item }) => {
  return (
    <PrimaryCard>
      <Text>{item.title}</Text>
    </PrimaryCard>
  );
};

export default ReminderItem;

const styles = StyleSheet.create({});
