import { useState } from "react";

export default function useSelectTag(selected) {
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
    console.log(selectedTags);
  };

  return { onSelectTag, selectedTags, print };
}
