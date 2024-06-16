import React from "react";
import data from "@/__test__/data/Group-Contact.json";
import ContactListItem from "@/modules/Connections/components/Contact-Item";
import { FlatList } from "react-native";

const GroupMembersList = () => {
  return (
    <FlatList
      contentContainerStyle={{ gap: 10 }}
      data={data}
      renderItem={({ item }) => <ContactListItem contact={item} />}
    />
  );
};

export default GroupMembersList;