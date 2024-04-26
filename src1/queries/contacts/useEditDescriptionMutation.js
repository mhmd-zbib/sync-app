import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactsService from "../../services/ContactService";

export const useEditDescriptionMutation = () => {
  const queryClient = useQueryClient();

  const editDescription = useMutation({
    mutationFn: ({ contactId, description }) => {
      ContactsService.addContactDescription(contactId, description);
    },
    onSuccess: () => {
      console.log("DONE!");
      queryClient.refetchQueries("contactDetails");
    },
    onError: (error) => {
      console.error("error:", error);
    },
  });

  return {
    editDescription,
  };
};
