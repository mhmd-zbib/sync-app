import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import Typography from "../../../components/Text.js/Typography";

const ContactItem = ({ item }) => {
  return (
    <PrimaryCard>
      <Typography>{item.name} s</Typography>
    </PrimaryCard>
  );
};

export default ContactItem;

const styles = StyleSheet.create({});
