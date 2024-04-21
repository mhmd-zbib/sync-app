import ContactsService from "../../services/ContactService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TagsService from "../../services/TagsService";

export const useAddContactTags = () => {
  const queryClient = useQueryClient();

  const addContactTag = useMutation({
    mutationFn: ({ tags, contactId }) => {
      console.log(tags, contactId, "these are the data");
      ContactsService.addTag(tags, contactId);
    },
    onSuccess: () => {
      queryClient.refetchQueries("contactDetails");
    },
    onError: (error) => {
      console.error("error:", error);
    },
  });

  return {
    addContactTag,
  };
};
