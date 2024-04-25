import { useNavigation } from "@react-navigation/native";
import React from "react";
import InputPageLayout from "../../components/layout/InputPageLayout";
import { useAddContactMutation } from "../../features/contacts/addContact/queries/useAddContactMutation";
import FirstProfileInfo from "../../features/contacts/addContact/steps/FirstProfileInfo";
import SecondContactInfo from "../../features/contacts/addContact/steps/SecondContactInfo";
import ThirdSocialLink from "../../features/contacts/addContact/steps/ThirdSocialLink";
import { useAddContactStore } from "../../features/contacts/addContact/store/useAddContactStore";
const AddContactPage = () => {
  const { step, nextStep, prevStep, formData, disabled } = useAddContactStore();
  const navigation = useNavigation();

  const { submitForm } = useAddContactMutation();
  const renderStep = () => {
    switch (step) {
      case 0:
        return <FirstPro fileInfo />;
      case 1:
        return <SecondContactInfo />;
      case 2:
        return <ThirdSocialLink />;
      default:
        return null;
    }
  };

  return (
    <InputPageLayout
      disabled={disabled}
      screenTitle={"Add Contact"}
      onBackPress={() => prevStep(navigation)}
      onPress={step < 2 ? nextStep : submitForm}
      buttonTitle={step < 2 ? "Next" : "Add"}>
      {renderStep()}
    </InputPageLayout>
  );
};

export default AddContactPage;
