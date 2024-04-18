import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import InputText from "../../ui/InputText";
import useContactFormStore from "../../../stores/contacts/useAddCotactStore";
import { useNavigation } from "@react-navigation/native";
import Typography from "../../ui/text/Typography";

const AddContactInfo = () => {
  const navigation = useNavigation();
  const { formData, updateField, previousStep } = useContactFormStore();

  return (
    <View style={{ gap: 24, marginTop: 32 }}>
      <InputText
        keyboardType="phone-pad"
        defaultCode="US"
        placeholder="00 000 000"
        label={"Phone Number"}
        value={formData.phoneNumber}
        autoFocus={true}
        onChangeText={(text) => updateField("phoneNumber", text)}
      />
      <InputText
        label="Email Address"
        keyboardTyp="email"
        placeholder="name@example.com"
        value={formData.email}
        onChangeText={(text) => updateField("email", text)}
      />
    </View>
  );
};

export default AddContactInfo;

const styles = StyleSheet.create({});
