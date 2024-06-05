import { View, Text, FlatList } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";
import ContactGroupItem from "./Contact-Group-Item";

interface GroupListProp {
  groups: GroupType[];
}

const ContactGroupList = ({ groups }: GroupListProp) => {
  return (
    <FlatList
      data={groups}
      contentContainerStyle={{ gap: 10 }}
      columnWrapperStyle={{ gap: 10 }}
      numColumns={2}
      renderItem={({ item }) => <ContactGroupItem group={item} />}
    />
  );
};

export default ContactGroupList;
