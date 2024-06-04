import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import NoteItem from "../components/Note-List-Item";
import SearchInput from "@/components/SearchInput";
import useSearch from "@/hooks/useSearch";

const NOTE = [
  {
    id: 124,
    createdAt: 12412412412,
    title: "note title",
    details: "Note description",
  },
  {
    id: 12,
    createdAt: 12412412412,
    title: "note title",
    details: "Note description",
  },
  {
    id: 2,
    createdAt: 12412412412,
    title: "note title",
    details: "Note description",
  },
  {
    id: 2,
    createdAt: 12412412412,
    title: "note title",
    details: "Note description",
  },
  {
    id: 2,
    createdAt: 12412412412,
    title: "note title",
    details: "Note description",
  },
  {
    id: 2,
    createdAt: 12412412412,
    title: "note title",
    details: "Note description",
  },
  {
    id: 2,
    createdAt: 12412412412,
    title: "note title",
    details: "Note description",
  },
  {
    id: 2,
    createdAt: 12412412412,
    title: "note title",
    details: "Note description",
  },
];

const NoteList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchable = useSearch(NOTE, searchTerm, (item) => item.title);

  return (
    <FlatList
      ListHeaderComponent={
        <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
      }
      contentContainerStyle={{ gap: 10 }}
      data={searchable}
      renderItem={({ item }) => <NoteItem note={item} />}
    />
  );
};

export default NoteList;
