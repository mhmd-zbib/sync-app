import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import EmptyList from "../../../../../shared/components/layout/EmptyList";
import SearchBar from "../../../../../shared/components/ui/SearchBar";
import useSearch from "../../../../../shared/hooks/useSearch";
import { useSort } from "../../../../../shared/hooks/useSort";
import { useTheme } from "../../../../../shared/stores/themeStore";
import ContactSelectItem from "./ContactSelectItem";

const ContactSelectList = ({ contacts, isBottomSheet = false }) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const ListComponent = isBottomSheet ? BottomSheetFlatList : FlatList;

  const searchable = useSearch(contacts, searchTerm, "name");
  const sortedContacts = useSort.byName(searchable, "name");

  return (
    <ListComponent
      ListHeaderComponent={
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      }
      ListEmptyComponent={<EmptyList title={"contacts"} />}
      ListHeaderComponentStyle={styles.header(theme)}
      stickyHeaderHiddenOnScroll
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      data={sortedContacts}
      contentContainerStyle={{ gap: 10, marginHorizontal: 10 }}
      renderItem={({ item }) => <ContactSelectItem contact={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  header: (theme) => ({
    backgroundColor: theme.secondary,
    paddingBottom: 5,
  }),
});

export default ContactSelectList;
