import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import InputText from "../../components/ui/InputText";
import AddContactForm from "../../components/app/contacts/AddContactForm";
import { useNavigation } from "@react-navigation/native";
import Typography from "../../components/ui/text/Typography";
import ContactsService from "../../services/ContactService";
import Button from "../../components/ui/buttons/Button";
import useContactFormStore from "../../stores/contacts/useAddCotactStore";

const AddContactPage = () => {
  const navigation = useNavigation();
  const { formData, submitForm } = useContactFormStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Connection",
      headerRight: () => (
        <Button
          title="Create"
          onPress={submitForm}
          variant={formData.name ? "primary" : "secondary"}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ gap: 24 }}>
      <AddContactForm />
    </View>
  );
};

export default AddContactPage;

const styles = StyleSheet.create({});
