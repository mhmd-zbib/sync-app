import { useState } from "react";
import useProfileIdStore from "../../../../Profile/store/useProfileIdStore";
import { useProfileTagMutation } from "../../../../Profile/queries/useProfileTagMutation";

export default function useSelectTag(selected) {
  const { id } = useProfileIdStore();
  const { mutate } = useProfileTagMutation();

  const [selectedTags, setSelectedTags] = useState(selected || []);

  const onSelectTag = (tag) => {
    const tagId = tag.id;

    if (selectedTags.includes(tagId)) {
      setSelectedTags((prevSelectedTags) =>
        prevSelectedTags.filter((t) => t !== tagId)
      );
    } else {
      setSelectedTags((prevSelectedTags) => [...prevSelectedTags, tagId]);
    }
  };

  const print = () => {
    mutate({ id, tags: selectedTags });
  };

  return { onSelectTag, selectedTags, print };
}
