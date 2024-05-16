import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactService from "../../Contacts/services/ContactService";

export function useProfileTagMutation() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation({
    mutationKey: "Birthday",
    mutationFn: async ({ id, tags }) => {
      return await ContactService.addTags(id, tags);
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
