import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import NoteItem from "./NoteItem";
import useSearch from "../../../../../shared/hooks/useSearch";

const NoteList = ({ data, searchTerm }) => {
  const navigation = useNavigation();

  function navigateToDetails(item) {
    navigation.navigate("NoteDetails", {
      id: item.id,
    });
  }

  const searchable = useSearch(data, searchTerm, "title");

  return (
    <FlatList
      contentContainerStyle={{ gap: 8, paddingBottom: 20 }}
      keyExtractor={(item) => item.id.toString()}
      data={searchable}
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
