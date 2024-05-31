import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactService from "../../Contacts/services/ContactService";

export function useDeleteContactMutation(id) {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  console.log(id);

  return useMutation({
    mutationKey: ["EditDescription", id],
    mutationFn: async () => {
      console.log(id);
      return await ContactService.delete(id);
    },
    onSuccess: () => {
      navigation.navigate("Connections");
      queryClient.refetchQueries(["ContactList"]);
    },
    onError: (error) => {
      console.error("Error creating note:", error);
    },
  });
}
