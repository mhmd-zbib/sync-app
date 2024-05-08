import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GroupContactItem from "./GroupContactItem";
import ContactItem from "../../../../Contacts/features/ContactList/components/ContactItem";

const GroupContactList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ContactItem item={item} />}
    />
  );
};

export default GroupContactList;

const styles = StyleSheet.create({});
