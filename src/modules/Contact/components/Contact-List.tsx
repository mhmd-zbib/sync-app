import EmptyList from "@/components/ui/Empty-List";
import React, { useMemo } from "react";
import { FlatList, FlatListProps } from "react-native";
import { Contact } from "../types/interface";
import ContactItem from "./Contact-Item";

const ContactList: React.FC<FlatListProps<Contact>> = (props) => {
  const renderItem = useMemo(() => {
    return ({ item }: { item: Contact }) => (
      <ContactItem contact={item} href={`/contact/${item.id}`} />
    );
  }, []);

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
