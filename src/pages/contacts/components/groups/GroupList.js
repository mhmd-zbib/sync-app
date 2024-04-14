import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../../../components/Text.js/Typography";
import GroupItem from "./GroupItem";
import useSearch from "../../../../hooks/useSearch";
import { useConnectionsSearchStore } from "../../store/useConnectionsSearchStore";
import { useSort } from "../../../../hooks/useSort";

const GroupList = () => {
  const searchTerm = useConnectionsSearchStore((state) => state.searchTerm);

  const groupData = [
    {
      name: "Plambee",
      members: 1,
    },
    {
      name: "Divavu",
      members: 2,
    },
    {
      name: "Meembee",
      members: 3,
    },
    {
      name: "Geba",
      members: 4,
    },
    {
      name: "Devshare",
      members: 5,
    },
    {
      name: "Zoomcast",
      members: 6,
    },
    {
      name: "Tekfly",
      members: 7,
    },
    {
      name: "Babbleblab",
      members: 8,
    },
  ];

  const searched = useSearch(groupData, searchTerm, "name", 200);
  const sort = useSort.byName(searched, "name");

  return (
    <FlatList
      data={sort}
      renderItem={({ item }) => <GroupItem item={item} />}
      keyExtractor={(item, index) => index}
      numColumns={2}
      columnWrapperStyle={{ gap: 8 }}
      contentContainerStyle={{ width: "100%", gap: 8 }}
    />
  );
};

export default GroupList;

const styles = StyleSheet.create({});
