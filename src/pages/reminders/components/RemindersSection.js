import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../../components/Text.js/Typography";

const RemindersSection = ({ dateTime }) => {
  const date = new Date(parseInt(dateTime));

  return (
    <View>
      <Typography> {date.toDateString()} </Typography>
    </View>
  );
};

export default RemindersSection;

const styles = StyleSheet.create({});
