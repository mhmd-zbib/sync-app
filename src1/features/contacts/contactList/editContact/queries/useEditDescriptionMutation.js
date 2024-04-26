import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactsService from "../../../../../services/ContactService";
import { useNavigation } from "@react-navigation/native";

export const useEditDescriptionMutation = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const editDescription = useMutation({
    mutationFn: ({ contactId, description }) => {
      ContactsService.addContactDescription(contactId, description);
    },
    onSuccess: () => {
      console.log("DONE!");
      queryClient.refetchQueries("contactDetails");
      navigation.goBack();
    },
    onError: (error) => {
      console.error("error:", error);
    },
  });

  return {
    editDescription,
  };
};
