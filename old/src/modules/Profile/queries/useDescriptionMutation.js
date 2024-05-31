import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactService from "../../Contacts/services/ContactService";

export function useDescriptionMutation() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation({
    mutationKey: "EditDescription",
    mutationFn: async ({ id, description }) => {
      return await ContactService.editDescription(id, description);
    },
    onSuccess: () => {
      // refetch the notes and navigates back
      navigation.goBack();
      queryClient.refetchQueries(["Profile"]);
      queryClient.invalidateQueries(["Profile"]);
    },
    onError: (error) => {
      console.error("Error creating note:", error);
    },
  });
}
