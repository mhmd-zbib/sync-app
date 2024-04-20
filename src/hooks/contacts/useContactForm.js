import ContactsService from "../../services/ContactService";
import useContactFormStore from "../../stores/contacts/useAddCotactStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useContactForm = () => {
  const queryClient = useQueryClient();
  const formData = useContactFormStore((state) => state.formData);
  const resetForm = useContactFormStore((state) => state.resetForm);

  const { mutate, data, error } = useMutation({
    mutationFn: (formData) => ContactsService.createContact(formData),
    onSuccess: () => {
      console.log("eyo");
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
