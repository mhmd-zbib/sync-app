import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import InputText from "../../../../components/ui/InputText";
import useContactFormStore from "../../../../stores/contacts/useAddCotactStore";

const AddContactInfo = () => {
  const navigation = useNavigation();
  const { formData, updateField, previousStep } = useContactFormStore();

  return (
    <View style={{ gap: 24 }}>
      <InputText
        keyboardType="phone-pad"
        defaultCode="US"
        placeholder="00 000 000"
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
