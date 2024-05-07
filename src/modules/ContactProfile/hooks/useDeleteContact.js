import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactService from "../../Contacts/services/ContactService";

export default function useDeleteContact(id) {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const deleteContact = useMutation({
    mutationKey: ["DeleteContact", id],
    mutationFn: () => {
      ContactService.deleteContact(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["Contacts"]);
      navigation.goBack();
    },
    onError: (error) => {
      console.error("Error deleting note:", error);
    },
  });

  return { deleteContact };
}
