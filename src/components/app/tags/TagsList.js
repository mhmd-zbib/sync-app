import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import TagRenderItem from "./TagRenderItem";
import useSearch from "../../../hooks/common/useSearch";
import { useTagSearchStore } from "../../../stores/tags/useTagSearchStore";

const TagsList = () => {
  const [selectedTagIds, setSelectedTagIds] = useState([]);
  const tags = [
    { id: 1, name: "Stuff", color: "red" },
    { id: 4, name: "Prog", color: "blue" },
  ];

  const searchTerm = useTagSearchStore((state) => state.searchTerm);
  const search = useSearch(tags, searchTerm, "name", 200);

  const handleSelectTag = (item) => {
    if (selectedTagIds.includes(item.id)) {
      setSelectedTagIds(selectedTagIds.filter((id) => id !== item.id));
    } else {
      setSelectedTagIds([...selectedTagIds, item.id]);
    }
  };

  console.log(selectedTagIds);

  return (
    <FlatList
      data={search}
      style={{ flex: 1 }}
      contentContainerStyle={{ gap: 6 }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TagRenderItem
          item={item}
          onSelect={handleSelectTag}
          isSelected={selectedTagIds.includes(item.id)}
        />
      )}
    />
  );
};

export default TagsList;

const styles = StyleSheet.create({});
