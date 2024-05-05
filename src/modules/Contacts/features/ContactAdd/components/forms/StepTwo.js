import React from "react";
import { View } from "react-native";
import InputText from "../../../../../../shared/components/ui/InputText";
import useAddContactFormStore from "../../store/useAddContactFormStore";

const StepTwo = () => {
  const { formData, updateField } = useAddContactFormStore();

  return (
    <View style={{ gap: 26 }}>
      <InputText
        keyboardType={"numeric"}
        label={"Phone Number"}
        value={formData.phoneNumber}
        onChange={(text) => updateField("phoneNumber", text)}
      />
      <InputText
        keyboardType={"email-address"}
        label={"Email Address"}
        value={formData.email}
        onChange={(text) => updateField("email", text)}
      />
    </View>
  );
};

export default StepTwo;
