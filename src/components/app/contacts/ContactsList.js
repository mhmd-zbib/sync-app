import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import useSearch from "../../../hooks/common/useSearch";
import { useSort } from "../../../hooks/common/useSort";
import { useContactListQuery } from "../../../queries/contacts/useContactsListQuery";
import { useConnectionsSearchStore } from "../../../stores/contacts/useConnectionsSearchStore";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import EmptyList from "../EmptyList";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const { data: contacts, isLoading, isError, error } = useContactListQuery();

  const searchTerm = useConnectionsSearchStore((state) => state.searchTerm);
  const filteredContacts = useSearch(contacts, searchTerm, "name");
  const sortedContacts = useSort.byName(filteredContacts, "name");
  const navigation = useNavigation();

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  if (contacts === 0 || contacts.length === 0)
    return <EmptyList title="connections" />;

  const navigateToProfile = (id) => {
    navigation.navigate("ContactDetails", { userId: id });
  };

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={sortedContacts}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => (
        <ContactItem onPress={() => navigateToProfile(item.id)} item={item} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: { flex: 1 },
  listContainer: { gap: 8, marginHorizontal: 10 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ContactsList;
