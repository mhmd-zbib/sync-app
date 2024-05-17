import { useState } from "react";
import useProfileIdStore from "../../../../Profile/store/useProfileIdStore";
import {
  useProfileTagAddMutation,
  useProfileTagMutation,
} from "../../../../Profile/queries/useProfileTagAddMutation";
import { useListTagQuery } from "../../../queries/useListTagQuery";
import { useProfileTagDeleteMutation } from "../../../../Profile/queries/useProfileTagDeleteMutation";

export default function useSelectTag(selected) {
  const { id } = useProfileIdStore();
  const { mutate: addTags } = useProfileTagAddMutation();
  const { mutate: deleteTags } = useProfileTagDeleteMutation();

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
    const tagsToAdd = selectedTags.filter((tag) => !selected.includes(tag));
    const tagsToDelete = selected.filter(
      (tags) => !selectedTags.includes(tags)
    );

    console.log("selected tags by user: ", selectedTags);
    console.log("old tags: ", selected);
    console.log("tags to add: ", tagsToAdd);
    console.log("tags to delete: ", tagsToDelete);

    if (tagsToAdd.length > 0) {
      addTags({ id, tags: tagsToAdd });
    }

    if (tagsToDelete.length > 0) {
      deleteTags({ id, tags: tagsToDelete });
    }
  };

  return { onSelectTag, selectedTags, print };
}
