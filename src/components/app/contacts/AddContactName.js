import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputText from "../../ui/InputText";
import useContactFormStore from "../../../stores/contacts/useAddCotactStore";
import ReminderFrequency from "./ReminderFrequency";

const AddContactName = () => {
  const { formData, updateField } = useContactFormStore();

  return (
    <View style={{ gap: 24 }}>
      <InputText
        label={"Full Name"}
        value={formData.name}
        onChangeText={(text) => updateField("name", text)}
        autoFocus={true}
        returnKeyType="next"
      />

      <ReminderFrequency />
    </View>
  );
};

export default AddContactName;

const styles = StyleSheet.create({});
