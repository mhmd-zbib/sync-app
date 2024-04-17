import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import AddContactForm from "../../components/app/contacts/AddContactForm";
import Button from "../../components/ui/buttons/Button";
import ContactsService from "../../services/ContactService";
import useContactFormStore from "../../stores/contacts/useAddCotactStore";
import ContactsManager from "../../core/database/databaseServices/ContactsManager";

const AddContactPage = () => {
  const navigation = useNavigation();
  const formData = useContactFormStore((state) => state.formData);
  const resetForm = useContactFormStore((state) => state.resetForm);
  const queryClient = useQueryClient();

  const { mutate, data, error } = useMutation({
    mutationFn: (formData) => ContactsService.createContact(formData),
    onSuccess: () => {
      resetForm();
      queryClient.refetchQueries(["contactNameList"]);
    },
    onError: (error) => {
      console.error("error:", error);
    },
  });

  const submitForm = () => {
    mutate(formData);
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 24,
      }}>
      <AddContactForm />
      <Button
        title={"Next"}
        onPress={submitForm}
        variant="lg"
        disabled={!formData.name}
      />
    </KeyboardAvoidingView>
  );
};

export default AddContactPage;

const styles = StyleSheet.create({});
