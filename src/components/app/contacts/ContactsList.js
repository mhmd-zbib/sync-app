import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import ContactsService from "../../../services/ContactService";
import useSearch from "../../../hooks/useSearch";
import ContactItem from "./ContactItem";
import EmptyList from "../EmptyList";
import { useConnectionsSearchStore } from "../../../stores/contacts/useConnectionsSearchStore";
import { useSort } from "../../../hooks/useSort";

const ContactsList = () => {
  const {
    data: contacts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["contactNameList"],
    queryFn: ContactsService.getAllContacts,
  });

  const searchTerm = useConnectionsSearchStore((state) => state.searchTerm);

  const filteredContacts = useSearch(contacts, searchTerm, "name");
  const sortedContacts = useSort.byName(filteredContacts, "name");

  if (isLoading)
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  if (isError)
    return (
      <View style={styles.center}>
        <Text>Error fetching contacts.</Text>
      </View>
    );
  if (sortedContacts.length === 0) return <EmptyList title="No connections" />;

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={sortedContacts}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => <ContactItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: { flex: 1 },
  listContainer: { gap: 8 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ContactsList;
