import ContactsService from "../../services/ContactService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TagsService from "../../services/TagsService";

export const useAddTag = () => {
  const addTag = useMutation({
    mutationFn: (tag) => {
      TagsService.addTag(tag);
    },
    onSuccess: () => {},
    onError: (error) => {
      console.error("error:", error);
    },
  });

  return {
    addTag,
  };
};
