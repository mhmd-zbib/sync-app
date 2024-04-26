import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactsService from "../../../../services/ContactService";
import { useNavigation } from "@react-navigation/native";

export const useEditConnectionMutation = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const editConnection = useMutation({
    mutationFn: ({ contactId, phoneNumber, email }) => {
      console.log(contactId, phoneNumber, email);
      ContactsService.editContactConnection(contactId, phoneNumber, email);
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
    editConnection,
  };
};
