import React from "react";
import { useContactForm } from "../../hooks/contacts/useContactForm";

import useContactNavigation from "../../hooks/contacts/useContactNavigation";
import AddContactInfo from "../../components/app/contacts/AddContactInfo";
import AddContactLinks from "../../components/app/contacts/AddContactLinks";
import AddContactName from "../../components/app/contacts/AddContactName";
import Button from "../../components/ui/buttons/Button";
import { View } from "react-native";
import useContactFormStore from "../../stores/contacts/useAddCotactStore";

const AddContactPage = () => {
  const { submitForm } = useContactForm();
  const navigation = useContactNavigation();
  const formData = useContactFormStore((state) => state.formData);
  const { step, nextStep } = useContactFormStore((state) => ({
    step: state.step,
    nextStep: state.nextStep,
  }));

  const renderStep = () => {
    switch (step) {
      case 0:
        return <AddContactName formData={formData} />;
      case 1:
        return <AddContactInfo formData={formData} />;
      case 2:
        return <AddContactLinks formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 24,
      }}>
      {renderStep()}
      <Button
        disabled={!formData.name}
        title={step === 2 ? "Submit" : "Next"}
        onPress={step < 2 ? nextStep : submitForm}
      />
    </View>
  );
};

export default AddContactPage;
