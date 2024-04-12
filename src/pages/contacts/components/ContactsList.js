import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import ContactItem from "./ContactItem";
import useGroupedSections from "../../../hooks/useGroupedSections";

const ContactsList = () => {
  const dummyContacts = [
    {
      name: "Alice",
      dob: "01/01/1990",
      phoneNumber: "1234567890",
      email: "alice@gmail.com",
    },
    {
      name: "Bob",
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
      name: "Charlie the thirs",
      dob: "03/03/1992",
      phoneNumber: "3456789012",
      email: "aharlie@gmail.com",
    },
  ];

  const sections = useGroupedSections(dummyContacts, (item) => item.dob);

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => <ContactItem item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

export default ContactsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
});
