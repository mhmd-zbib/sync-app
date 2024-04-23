import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { useConnectionsSearchStore } from "../../../../stores/contacts/useConnectionsSearchStore";
import useSearch from "../../../../hooks/common/useSearch";
import { useSort } from "../../../../hooks/common/useSort";

const useContactList = (contacts) => {
  const searchTerm = useConnectionsSearchStore((state) => state.searchTerm);
  const filteredContacts = useSearch(contacts, searchTerm, "name");
  const sortedContacts = useSort.byName(filteredContacts, "name");

  return useMemo(() => sortedContacts, [sortedContacts]);
};

export default useContactList;

const styles = StyleSheet.create({});
