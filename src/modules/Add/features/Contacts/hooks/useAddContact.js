/**
 * This hook is responsible for handling add contact requests
 * it takes in the form data, add time stamps and call the
 * service, then it resets the form and starts right over.
 *
 */

import AddContactService from "../services/AddContactService";
import { useMutation } from "@tanstack/react-query";
import useAddContactFormStore from "../store/useAddContactFormStore";

export default function useAddContact() {
  const { formData, resetForm } = useAddContactFormStore();

  const addContact = useMutation({
    mutationKey: "AddContact",
    mutationFn: async () => {
      const date = new Date();
      const timestamp = date.getTime();
      const { name, phoneNumber, email } = formData;

      return await AddContactService({ name, phoneNumber, email, timestamp });
    },
    onSuccess: (contactId) => {
      resetForm();
      console.log("Contact added successfully", contactId);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { addContact };
}
