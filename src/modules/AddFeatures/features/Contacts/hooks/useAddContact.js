/**
 * This hook is responsible for handling add contact requests
 * it takes in the form data, add time stamps and call the
 * service, then it resets the form and starts right over.
 *
 */

import AddContactService from "../services/AddContactService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAddContactFormStore from "../store/useAddContactFormStore";
import { useNavigation } from "@react-navigation/native";

export default function useAddContact() {
  const { formData, resetForm } = useAddContactFormStore();
  const queryClient = useQueryClient();
  const navigation = useNavigation();

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
      queryClient.refetchQueries("ContactList");
      console.log("Contact added successfully", contactId);
      navigation.goBack();
      navigation.navigate("ContactProfileScreen", { id: contactId });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { addContact };
}
