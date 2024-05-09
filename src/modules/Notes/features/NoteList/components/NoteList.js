/**
 * Note list component, it handles the search and filtering inside the
 * component were later the user can specify what do they want to be sorted and how
 *
 * @param {Object} data - note data
 * @returns {JSX.Element} - note list component
 *
 */

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import SearchBar from "../../../../../shared/components/ui/SearchBar";
import { useTheme } from "../../../../../shared/stores/themeStore";
import useContactIdStore from "../../../../ContactProfile/stores/ContactIdStore";
import { useNoteList } from "../hooks/useNoteList";
import NoteItem from "./NoteItem";
import Loading from "../../../../../shared/components/layout/Loading";
import Error from "../../../../../shared/components/layout/Error";
import EmptyList from "../../../../../shared/components/layout/EmptyList";
import Typography from "../../../../../shared/components/ui/Typography";

const NoteList = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const id = useContactIdStore((state) => state.id);

  const { searchTerm, setSearchTerm, filtered, noteList } = useNoteList(id);

  function navigateToDetails(item) {
    navigation.navigate("NoteDetails", {
      id: item.id,
    });
  }

  if (noteList.isLoading) return <Loading />;
  if (noteList.isError) return <Error error={noteList.error} />;

  return (
    <FlatList
      ListEmptyComponent={<EmptyList title={"notes"} />}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      }
      ListHeaderComponentStyle={{
        backgroundColor: theme.background,
        paddingBottom: 5,
        paddingTop: 20,
      }}
      stickyHeaderHiddenOnScroll
      contentContainerStyle={{
        gap: 8,
        paddingBottom: 20,
        flex: filtered.length > 0 ? null : 1,

        marginHorizontal: 10,
      }}
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