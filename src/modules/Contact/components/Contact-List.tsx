import EmptyList from "@/components/ui/Empty-List";
import React from "react";
import { FlatList, FlatListProps } from "react-native";
import { Contact } from "../types/interface";
import ContactItem from "./Contact-Item";

const renderItem = ({ item }: { item: Contact }) => (
  <ContactItem contact={item} />
);

const ContactList: React.FC<FlatListProps<Contact>> = (props) => {
  return (
    <FlatList
      {...props}
      contentContainerStyle={{ gap: 10 }}
      renderItem={renderItem}
      ListEmptyComponent={<EmptyList />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ContactList;
