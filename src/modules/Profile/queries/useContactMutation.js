import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactService from "../../Contacts/services/ContactService";

export function useContactMutation() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation({
    mutationKey: "EditDescription",
    mutationFn: async ({ id, phone, email }) => {
      console.log(id, phone, email);
      return await ContactService.editContact(id, phone.toString(), email);
    },
    onSuccess: () => {
      navigation.goBack();
      queryClient.refetchQueries(["Profile"]);
      queryClient.invalidateQueries(["Profile"]);
    },
    onError: (error) => {
      console.error("Error creating note:", error);
    },
  });
}
