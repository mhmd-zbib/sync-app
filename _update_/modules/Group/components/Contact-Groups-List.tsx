import { View, Text, FlatList } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";
import GroupListItem from "@/modules/Connections/components/Connection-List/Group-List-Item";
import ContactGroupsItem from "./Contact-Groups-Item";

interface ContactGroupsProps {
  groups: GroupType[];
}

const ContactGroupsList = ({ groups }: ContactGroupsProps) => {
  return (
    <FlatList
      numColumns={2}
      data={groups}
      renderItem={({ item }) => <ContactGroupsItem group={item} />}
      contentContainerStyle={{ gap: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
};

export default ContactGroupsList;
