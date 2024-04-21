import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import useSearch from "../../../hooks/common/useSearch";
import { useAddContactTags } from "../../../queries/contacts/useAddContactTags";
import { useTagListQuery } from "../../../queries/tags/useTagListQuery";
import { useContactDetailsStore } from "../../../stores/contacts/useContactDetailsStore";
import { useTagSearchStore } from "../../../stores/tags/useTagSearchStore";
import Button from "../../ui/buttons/Button";
import TagRenderItem from "./TagRenderItem";

const TagsList = () => {
  const [selectedTagIds, setSelectedTagIds] = useState([]);
  const { addContactTag } = useAddContactTags();
  const { contactDetails } = useContactDetailsStore();
  const { data: tags } = useTagListQuery();
  const searchTerm = useTagSearchStore((state) => state.searchTerm);
  const filteredTags = useSearch(tags, searchTerm, "name", 200);

  const handleSelectTag = (tagId) => {
    setSelectedTagIds((prevSelected) =>
      prevSelected.includes(tagId)
        ? prevSelected.filter((id) => id !== tagId)
        : [...prevSelected, tagId]
    );
  };

  const handleSubmitTags = () => {
    addContactTag.mutate({
      tags: selectedTagIds,
      contactId: contactDetails.id,
    });
    setSelectedTagIds([]);
  };

  return (
    <>
      <FlatList
        data={filteredTags}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TagRenderItem
            item={item}
            onSelect={() => handleSelectTag(item.id)}
            isSelected={selectedTagIds.includes(item.id)}
          />
        )}
        contentContainerStyle={styles.container}
      />
      <Button title="Save" onPress={handleSubmitTags} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 6,
  },
});

export default TagsList;
