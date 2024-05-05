import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SearchBar from "../../../shared/components/ui/SearchBar";
import Typography from "../../../shared/components/ui/Typography";
import { useTheme } from "../../../shared/stores/themeStore";
import useConnectionsData from "../hooks/useConnectionsData";
import CategoryTitle from "./CategoryTitle";
import ConnectionsItem from "./ConnectionsItem";

export default function ConnectionsList() {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const { category, data, setCategory, isLoading } =
    useConnectionsData(searchTerm);

  return (
    <FlatList
      data={data[category]}
      renderItem={({ item }) => (
        <ConnectionsItem
          item={item}
          isLoading={isLoading}
          category={category}
        />
      )}
      keyExtractor={(item, index) => item.id || index.toString()}
      ListHeaderComponent={
        <View
          style={[styles.listHeader, { backgroundColor: theme.background }]}>
          <Typography variant="xlg" fontWeight={500}>
            Connections
          </Typography>
          <SearchBar
            placeholder="Search"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <CategoryTitle setCategory={setCategory} activeCategory={category} />
        </View>
      }
      stickyHeaderIndices={[0]}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  listHeader: {
    gap: 10,
    paddingBottom: 10,
  },
});
