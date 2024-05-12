import React, { useState } from "react";
import { FlatList } from "react-native";
import TagItem from "./TagItem";
import SearchBar from "../../../../../shared/components/ui/SearchBar";
import useSort from "../../../../../shared/hooks/useSort";
import useSearch from "../../../../../shared/hooks/useSearch";
import EmptyList from "../../../../../shared/components/layout/EmptyList";
import { useTheme } from "../../../../../shared/stores/themeStore";

const TagList = ({ tags, onSelectTag, selected }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { background } = useTheme();

  const sorted = useSort(tags, "tag");
  const searched = useSearch(sorted, searchTerm, "tag");

  return (
    <FlatList
      stickyHeaderHiddenOnScroll
      stickyHeaderIndices={[0]}
      ListHeaderComponentStyle={{
        backgroundColor: background,
        paddingBottom: 10,
      }}
      ListEmptyComponent={<EmptyList title={"tags"} />}
      ListHeaderComponent={
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      }
      data={searched}
      renderItem={({ item }) => (
        <TagItem
          item={item}
          onSelect={onSelectTag}
          selectedId={selected.includes(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 10 }}
    />
  );
};

export default TagList;
