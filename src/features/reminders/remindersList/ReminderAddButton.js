import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryCard from "../../../components/ui/cards/PrimaryCard";
import Typography from "../../../components/ui/text/Typography";

const ReminderAddButton = ({ icon, title, value, onPress, modal }) => {
  return (
    <PrimaryCard onPress={onPress}>
      <Typography>{title}</Typography>
      {modal}
    </PrimaryCard>
  );
};

export default ReminderAddButton;

const styles = StyleSheet.create({});
