import React from "react";
import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import ContactItem from "./ContactItem";
import useGroupedSections from "../../../hooks/useGroupedSections";
import ContactSection from "./ContactSection";
import { useSort } from "../../../hooks/useSort";

const ContactsList = () => {
  const dummyContacts = [
    {
      name: "Alice",
      dob: "01/01/1990",
      phoneNumber: "1234567890",
      email: "alice@gmail.com",
    },
    {
      name: "Cob",
      dob: "02/02/1991",
      phoneNumber: "2345678901",
      email: "bob@gmail.com",
    },
    {
      name: "Bob",
      dob: "02/02/1991",
      phoneNumber: "2345678901",
      email: "bob@gmail.com",
    },
    {
      name: "Charlie the thirs as fa aga",
      dob: "03/03/1992",
      phoneNumber: "3456789012",
      email: "aharlie@gmail.com",
    },
  ];

  const sorted = useSort.name(dummyContacts, "name");

  return (
    <FlatList
      contentContainerStyle={{ gap: 8 }}
      data={sorted}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => <ContactItem item={item} />}
    />
  );
};

export default ContactsList;
