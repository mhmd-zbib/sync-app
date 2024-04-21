import { useMutation, useQueryClient } from "@tanstack/react-query";
import TagsService from "../../services/TagsService";

export const useAddTag = () => {
  const queryClient = useQueryClient();

  const addTag = useMutation({
    mutationFn: (tag) => {
      console.log(tag, " the tag");
      TagsService.addTag(tag);
    },
    onSuccess: () => {
      console.log("okay");
      queryClient.refetchQueries("tags");
    },
    onError: (error) => {
      console.error("error:", error);
    },
  });

  return {
    addTag,
  };
};
