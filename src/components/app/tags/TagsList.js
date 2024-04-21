import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import TagRenderItem from "./TagRenderItem";
import useSearch from "../../../hooks/common/useSearch";
import { useTagSearchStore } from "../../../stores/tags/useTagSearchStore";
import TagsService from "../../../services/TagsService";
import { useQuery } from "@tanstack/react-query";
import { useTagsSelectStore } from "../../../stores/tags/useTagsSelectStore";
import Button from "../../ui/buttons/Button";
import { useAddContactTags } from "../../../hooks/contacts/useAddContactTags";
import { useContactDetailsStore } from "../../../stores/contacts/useContactDetailsStore";

const TagsList = () => {
  const [selectedTagIds, setSelectedTagIds] = useState([]);
  const { addContactTag } = useAddContactTags();
  const { id: contactId } = useContactDetailsStore(
    (state) => state.contactDetails
  );

  const { data: tags } = useQuery({
    queryKey: ["tags"],
    queryFn: TagsService.getTags,
  });

  const searchTerm = useTagSearchStore((state) => state.searchTerm);
  const search = useSearch(tags, searchTerm, "name", 200);

  const handleSelectTag = (item) => {
    if (selectedTagIds.includes(item.id)) {
      setSelectedTagIds(selectedTagIds.filter((id) => id !== item.id));
    } else {
      setSelectedTagIds([...selectedTagIds, item.id]);
    }
  };

  const handleSubmitTags = () => {
    addContactTag.mutate({ tags: selectedTagIds, contactId: contactId });
    setSelectedTagIds([]);
  };

  return (
    <>
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

      <Button title={"Save"} onPress={handleSubmitTags} />
    </>
  );
};

export default TagsList;

const styles = StyleSheet.create({});
