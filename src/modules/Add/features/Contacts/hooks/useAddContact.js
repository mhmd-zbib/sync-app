import AddContactService from "../services/AddContactService";
import { useMutation } from "@tanstack/react-query";
import useAddContactFormStore from "../store/useAddContactFormStore";

export default function useAddContact() {
  const { formData, resetForm } = useAddContactFormStore();

  const addContact = useMutation({
    mutationKey: "AddContact",
    mutationFn: () => {
      const date = new Date();
      const timestamp = date.getTime();
      AddContactService(formData);

      resetForm();
    },
    onSuccess: () => {},
  });

  return { addContact };
}
