import ThemedText from "@/components/ThemedText";
import ContactListItem from "@/modules/Connections/components/Contact-Item";
import React from "react";
import { FlatList, Text } from "react-native";

const MOCK_DATA = [
  { name: "Ali" },
  { name: "Mohammad" },
  { name: "Hussein" },
  { name: "Ahmad" },
];

const FavoriteContactList = () => {
  return (
    <FlatList
      renderItem={({ item }) => <ContactListItem contact={item} />}
      data={MOCK_DATA}
    />
  );
};

export default FavoriteContactList;
