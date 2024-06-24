import ThemedText from "@/components/ThemedText";
import React from "react";
import { FlatList } from "react-native";
import { Contact } from "../types/interface";
import ContactItem from "./Contact-Item";
import EmptyList from "@/components/Empty-List";

interface ContactListProps {
  data: Contact[];
}

const ContactList = ({ data, ...props }: ContactListProps) => {
  return (
    <FlatList
      {...props}
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => <ContactItem contact={item} />}
      data={data}
      ListEmptyComponent={<EmptyList />}
    />
  );
};

export default ContactList;
