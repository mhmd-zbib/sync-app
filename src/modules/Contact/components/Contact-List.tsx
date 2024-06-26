import EmptyList from "@/components/Empty-List";
import React from "react";
import { FlatList, FlatListProps } from "react-native";
import { Contact } from "../types/interface";
import ContactItem from "./Contact-Item";

const ContactList: React.FC<FlatListProps<Contact>> = (props) => {
  return (
    <FlatList
      {...props}
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => <ContactItem contact={item} />}
      ListEmptyComponent={<EmptyList />}
    />
  );
};

export default ContactList;
