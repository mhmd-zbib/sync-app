import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactService from "../../Contacts/services/ContactService";

export function useBirthdayContactMutation() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation({
    mutationKey: "Birthday",
    mutationFn: async ({ id, birthday }) => {
      // console.log(id, birthday);
      return await ContactService.editBirthday(id, birthday);
    },
    onSuccess: () => {
      // navigation.goBack();
      queryClient.refetchQueries(["Profile"]);
      queryClient.invalidateQueries(["Profile"]);
    },
    onError: (error) => {
      console.error("Error creating note:", error);
    },
  });
}
