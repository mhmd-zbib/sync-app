import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAddContactSteps } from "../../features/contacts/addContact/hooks/useAddContactSteps";
import InputPageLayout from "../../components/layout/InputPageLayout";
import Typography from "../../components/ui/text/Typography";
import useContactFormStore from "../../stores/contacts/useAddCotactStore";
import { useAddContactStore } from "../../features/contacts/addContact/store/useAddContactStore";
import { useNavigation } from "@react-navigation/native";
import FirstProfileInfo from "../../features/contacts/addContact/steps/FirstProfileInfo";
import SecondContactInfo from "../../features/contacts/addContact/steps/SecondContactInfo";
import ThirdSocialLink from "../../features/contacts/addContact/steps/ThirdSocialLink";

const AddContactPage = () => {
  const { step, formData, setFormData, nextStep, prevStep } =
    useAddContactStore();
  const navigation = useNavigation();

  const RenderStep = () => {
    switch (step) {
      case 0:
        return <FirstProfileInfo />;
      case 1:
        return <SecondContactInfo />;
      case 2:
        return <ThirdSocialLink />;
    }
  };

  return (
    <InputPageLayout
      screenTitle={"Add Contact"}
      onBackPress={() => prevStep(navigation)}
      onPress={nextStep}
      buttonTitle={step < 2 ? "Next" : "Add"}>
      <RenderStep />
    </InputPageLayout>
  );
};

export default AddContactPage;

const styles = StyleSheet.create({});
