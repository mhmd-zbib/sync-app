import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import useGetContacts from "../../../../Contacts/features/ContactList/hooks/useGetContacts";
import useSearch from "../../../../../shared/hooks/useSearch";
import { useSort } from "../../../../../shared/hooks/useSort";
import Loading from "../../../../../shared/components/layout/Loading";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

const ContactsBottomSheet = () => {
  const { data: contacts, isLoading, isError, error } = useGetContacts();

  if (isLoading) {
    return <Loading />;
  }

  // const filteredContacts = useSearch(contacts, searchTerm, "name");
  const sortedContacts = useSort.byName(contacts, "name");

  return (
    <BottomSheetFlatList
      data={sortedContacts}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ContactsBottomSheet;

const styles = StyleSheet.create({});
