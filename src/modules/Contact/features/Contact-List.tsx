import data from "@/__test__/data/Contacts.json";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { FlatList } from "react-native";
import ContactItem from "./Contact-Item";
import { Contact } from "../types/interface";

interface ContactListProps {
  data: Contact[];
}

const ContactList = ({ data }: ContactListProps) => {
  return (
    <FlatList
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => <ContactItem contact={item} />}
      data={data}
      ListEmptyComponent={<ThemedText>Nohting here</ThemedText>}
    />
  );
};

export default ContactList;
