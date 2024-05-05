/**
 * Note list component, it handles the search and filtering inside the
 * component were later the user can specify what do they want to be sorted and how
 *
 * @param {Object} data - note data
 * @returns {JSX.Element} - note list component
 *
 */

import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import SearchBar from "../../../../../shared/components/ui/SearchBar";
import NoteItem from "./NoteItem";
import useSearch from "../../../../../shared/hooks/useSearch";
import useSort from "../../../../../shared/hooks/useSort";
import { useTheme } from "../../../../../shared/stores/themeStore";

const NoteList = ({ data }) => {
  const navigation = useNavigation();
  const theme = useTheme();
  function navigateToDetails(item) {
    navigation.navigate("NoteDetails", {
      id: item.id,
    });
  }

  const [searchTerm, setSearchTerm] = useState("");
  const searchable = useSearch(data, searchTerm, "title");
  const filtered = useSort(searchable, "created_at", false);

  return (
    <FlatList
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      }
      ListHeaderComponentStyle={{
        backgroundColor: theme.background,
        paddingBottom: 5,
      }}
      stickyHeaderHiddenOnScroll
      contentContainerStyle={{ gap: 8, paddingBottom: 20 }}
      keyExtractor={(item) => item.id.toString()}
      data={filtered}
      renderItem={({ item }) => (
        <NoteItem
          onPress={() => {
            navigateToDetails(item);
          }}
          item={item}
        />
      )}
    />
  );
};

export default NoteList;

const styles = StyleSheet.create({});
