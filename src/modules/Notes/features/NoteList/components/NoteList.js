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
import EmptyList from "../../../../../shared/components/layout/EmptyList";
import Error from "../../../../../shared/components/layout/Error";
import Loading from "../../../../../shared/components/layout/Loading";
import SearchBar from "../../../../../shared/components/ui/SearchBar";
import { useTheme } from "../../../../../shared/stores/themeStore";
import { useNoteList } from "../hooks/useNoteList";
import NoteItem from "./NoteItem";
import useProfileIdStore from "../../../../Profile/store/useProfileIdStore";

const NoteList = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { id } = useProfileIdStore();

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
        filtered.length > 0 ? (
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        ) : null
      }
      ListHeaderComponentStyle={{
        backgroundColor: theme.background,
        paddingBottom: 5,
      }}
      stickyHeaderHiddenOnScroll
      contentContainerStyle={{
        gap: 8,
        paddingBottom: 20,
        flex: filtered.length > 0 ? null : 1,
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
