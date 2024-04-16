import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputText from "../../ui/InputText";
import useContactFormStore from "../../../stores/contacts/useAddCotactStore";

const AddContactForm = () => {
  const { formData, updateField } = useContactFormStore();

  return (
    <View style={{ gap: 24 }}>
      <InputText
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => updateField("name", text)}
      />
      <InputText
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => updateField("email", text)}
      />
      <InputText
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChangeText={(text) => updateField("phoneNumber", text)}
      />
    </View>
  );
};

export default AddContactForm;

const styles = StyleSheet.create({});
