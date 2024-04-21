export const handleSelectTag = (item) => {
  if (selectedTagIds.includes(item.id)) {
    setSelectedTagIds(selectedTagIds.filter((id) => id !== item.id));
  } else {
    setSelectedTagIds([...selectedTagIds, item.id]);
  }
};

export const handleSubmitTags = () => {
  addContactTag.mutate({ tags: selectedTagIds, contactId: contactId });
  setSelectedTagIds([]);
};
