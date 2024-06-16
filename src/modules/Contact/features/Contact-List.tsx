import React from "react";
import { FlatList } from "react-native";
import { Contact } from "../types/interface";
import ContactItem from "./Contact-Item";
import ThemedText from "@/components/ThemedText";

interface ContactList {
  data: Contact[];
}

const ContactList = ({ data }: ContactList) => {
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
