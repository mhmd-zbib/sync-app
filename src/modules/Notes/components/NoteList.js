import React from "react";
import { FlatList, StyleSheet } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ data }) => {
  return (
    <FlatList
      style={{ marginTop: 20, marginHorizontal: 10 }}
      contentContainerStyle={{ gap: 8 }}
      keyExtractor={(item) => item.id.toString()}
      data={data}
      renderItem={({ item }) => <NoteItem item={item} />}
    />
  );
};

export default NoteList;

const styles = StyleSheet.create({});
