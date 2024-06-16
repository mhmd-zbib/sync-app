import ThemedText from "@/components/ThemedText";
import ContactListItem from "@/modules/Connections/components/Contact-Item";
import React from "react";
import { FlatList, Text } from "react-native";

const MOCK_DATA = [
  { name: "Ali" },
  { name: "Mohammad" },
  { name: "Hussein", isStarred: true },
  { name: "Ahmad", isTagged: true },
];

const ContactList = () => {
  return (
    <FlatList
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => <ContactListItem contact={item} />}
      data={MOCK_DATA}
    />
  );
};

export default ContactList;
