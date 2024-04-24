import ContactsService from "../../../../services/ContactService";
import useContactFormStore from "../../../../stores/contacts/useAddCotactStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAddContactStore } from "../store/useAddContactStore";

export const useAddContactMutation = () => {
  const queryClient = useQueryClient();
  const formData = useAddContactStore((state) => state.formData);
  const resetForm = useAddContactStore((state) => state.resetForm);

  const { mutate, data, error } = useMutation({
    mutationFn: (formData) => ContactsService.createContact(formData),
    onSuccess: () => {
      console.log("DONE");
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
