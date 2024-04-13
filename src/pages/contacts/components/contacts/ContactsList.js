import React from "react";
import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import ContactItem from "./ContactItem";
import useGroupedSections from "../../../../hooks/useGroupedSections";
import ContactSection from "./ContactSection";
import { useSort } from "../../../../hooks/useSort";

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

  const sort = useSort.byName(dummyContacts, "name");

  return (
    <FlatList
      contentContainerStyle={{ gap: 8 }}
      data={sort}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => <ContactItem item={item} />}
    />
  );
};

export default ContactsList;
