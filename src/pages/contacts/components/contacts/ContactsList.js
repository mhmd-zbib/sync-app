import React from "react";
import { FlatList } from "react-native";
import { useSort } from "../../../../hooks/useSort";
import ContactItem from "./ContactItem";
import { useConnectionsSearchStore } from "../../store/useConnectionsSearchStore";
import useSearch from "../../../../hooks/useSearch";

const ContactsList = () => {
  const dummyContacts = [
    {
      name: "Alice",
      dob: "01/01/1990",
      phoneNumber: "8",
      email: "alice@gmail.com",
      date: 18680000,
    },
    {
      name: "Cob",
      dob: "02/02/1991",
      phoneNumber: "4",
      email: "bob@gmail.com",
      date: 18680000,
    },
    {
      name: "Bob",
      dob: "02/02/1991",
      phoneNumber: "1",
      email: "bob@gmail.com",
      date: 18680000,
    },
    {
      name: "Charlie the thirs as fa aga",
      dob: "03/03/1992",
      phoneNumber: "2",
      email: "aharlie@gmail.com",
      date: 18680000,
    },
  ];

  const searchTerm = useConnectionsSearchStore((state) => state.searchTerm);
  const search = useSearch(dummyContacts, searchTerm, "name", 200);
  const sort = useSort.byName(search, "name");

  return (
    <FlatList
      contentContainerStyle={{ gap: 8 }}
      data={sort}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => <ContactItem item={item} />}
    />
  );
};

export default ContactsList;
