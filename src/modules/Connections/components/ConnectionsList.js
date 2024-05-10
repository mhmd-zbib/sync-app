import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SearchBar from "../../../shared/components/ui/SearchBar";
import Typography from "../../../shared/components/ui/Typography";
import { useTheme } from "../../../shared/stores/themeStore";
import useConnectionsData from "../hooks/useConnectionsData";
import CategoryTitle from "./CategoryTitle";
import ConnectionsItem from "./ConnectionsItem";
import EmptyList from "../../../shared/components/layout/EmptyList";

export default function ConnectionsList() {
  const [selectMode, setSelectMode] = useState(false);
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const { category, data, setCategory, isLoading } =
    useConnectionsData(searchTerm);

  return (
    <FlatList
      ListEmptyComponent={<EmptyList title={category} />}
      data={data[category]}
      stickyHeaderHiddenOnScroll={!selectMode}
      renderItem={({ item }) => (
        <ConnectionsItem
          // onLongPress={
          //   !selectMode ? () => setSelectMode(true) : () => setSelectMode(false)
          // }
          item={item}
          isLoading={isLoading}
          category={category}
          selectMode={selectMode}
        />
      )}
      keyExtractor={(item, index) => item.id || index.toString()}
      ListHeaderComponent={
        <>
          <Typography variant="xlg" fontWeight={500}>
            Connections
          </Typography>
          <SearchBar
            placeholder="Search"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <CategoryTitle
            disabled={selectMode}
            setCategory={setCategory}
            activeCategory={category}
          />
        </>
      }
      stickyHeaderIndices={[0]}
      contentContainerStyle={styles.container}
      ListHeaderComponentStyle={{ gap: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginHorizontal: 10,
  },
});
