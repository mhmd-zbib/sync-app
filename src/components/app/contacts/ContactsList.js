import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import ContactsService from "../../../services/ContactService";
import useSearch from "../../../hooks/common/useSearch";
import ContactItem from "./ContactItem";
import EmptyList from "../EmptyList";
import { useConnectionsSearchStore } from "../../../stores/contacts/useConnectionsSearchStore";
import { useSort } from "../../../hooks/common/useSort";
import { useNavigation } from "@react-navigation/native";
import { useContactListQuery } from "../../../queries/contacts/useContactsListQuery";
import Typography from "../../ui/text/Typography";

const ContactsList = () => {
  const { data: contacts, isLoading, isError, error } = useContactListQuery();

  const searchTerm = useConnectionsSearchStore((state) => state.searchTerm);
  const filteredContacts = useSearch(contacts, searchTerm, "name");
  const sortedContacts = useSort.byName(filteredContacts, "name");
  const navigation = useNavigation();

  if (isLoading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  if (isError) {
    console.log(error);
    return (
      <View style={styles.center}>
        <Typography>Error fetching contacts. </Typography>
      </View>
    );
  }
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
