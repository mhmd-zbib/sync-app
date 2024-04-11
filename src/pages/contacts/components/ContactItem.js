import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryCard from "../../../components/cards/PrimaryCard";

const ContactItem = (item) => {
  return (
    <PrimaryCard>
      <Text>{item.name}</Text>
    </PrimaryCard>
  );
};

export default ContactItem;

const styles = StyleSheet.create({});
