import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputText from "../../ui/InputText";
import useContactFormStore from "../../../stores/contacts/useAddCotactStore";
import ReminderFrequency from "./ReminderFrequency";

const AddContactForm = () => {
  const { formData, updateField } = useContactFormStore();

  return (
    <View style={{ gap: 24, marginTop: 32 }}>
      <InputText
        label={"Full Name"}
        value={formData.name}
        onChangeText={(text) => updateField("name", text)}
      />
      <InputText
        label={"Phone Number"}
        value={formData.phoneNumber}
        onChangeText={(text) => updateField("phoneNumber", text)}
      />
      <InputText
        label="Email"
        value={formData.email}
        onChangeText={(text) => updateField("email", text)}
      />

      <ReminderFrequency />
    </View>
  );
};

export default AddContactForm;

const styles = StyleSheet.create({});
