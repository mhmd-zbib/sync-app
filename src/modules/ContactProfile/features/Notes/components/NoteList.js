import React from "react";
import { FlatList, StyleSheet } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const data = [
    {
      id: 2,
      title: "Test one",
      description: " Testing hereasf ahfoi",
      date_created: 6168946166,
    },
    {
      id: 3,
      title: "Test two",
      description: " Testing here",
      date_created: 6168946166,
    },
  ];
  return (
    <FlatList
      //   numColumns={2}
      //   columnWrapperStyle={{ flex: 1, justifyContent: "space-between", gap: 10 }}
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
