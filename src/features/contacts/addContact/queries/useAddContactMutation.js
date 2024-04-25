import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactsService from "../../../../services/ContactService";
import { useAddContactStore } from "../store/useAddContactStore";
import { useNavigation } from "@react-navigation/native";

export const useAddContactMutation = () => {
  const queryClient = useQueryClient();
  const formData = useAddContactStore((state) => state.formData);
  const resetForm = useAddContactStore((state) => state.resetForm);
  const navigation = useNavigation();

  const { mutate, data, error } = useMutation({
    mutationFn: (formData) => ContactsService.createContact(formData),
    onSuccess: (userId) => {
      navigation.navigate("ContactDetails", { userId: userId });
      queryClient.refetchQueries("contactNameList");
      resetForm();
    },

    onError: (error) => {
      console.error("error:", error);
    },
  });

  const submitForm = () => {
    return mutate(formData);
  };

  return {
    submitForm,
  };
};
