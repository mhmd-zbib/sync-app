import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ContactItem from "../../../../Contacts/features/ContactList/components/ContactItem";
import SearchBar from "../../../../../shared/components/ui/SearchBar";
import useSearch from "../../../../../shared/hooks/useSearch";
import useSort from "../../../../../shared/hooks/useSort";

const GroupContactList = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchable = useSearch(data, searchTerm, "name");
  const sorted = useSort(searchable, "name");

  console.log(data);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </>
      }
      style={{ padding: 10 }}
      contentContainerStyle={{ gap: 10 }}
      data={sorted}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ContactItem item={item} />}
    />
  );
};

export default GroupContactList;
