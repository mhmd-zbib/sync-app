import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useContactForm } from "../../queries/contacts/useContactForm";
import useContactNavigation from "../../hooks/contacts/useContactNavigation";
import Button from "../../components/ui/buttons/Button";
import useContactFormStore from "../../stores/contacts/useAddCotactStore";
import AddContactName from "../../features/contacts/addContact/components/AddContactName";
import AddContactLinks from "../../features/contacts/addContact/components/AddContactLinks";
import AddContactInfo from "../../features/contacts/addContact/components/AddContactInfo";

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
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        {renderStep()}
      </ScrollView>
      <Button
        disabled={!formData.name}
        title={step === 2 ? "Submit" : "Next"}
        onPress={step < 2 ? nextStep : submitForm}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 24,
    marginHorizontal: 10,
  },
  contentContainer: {
    flexGrow: 1,
  },
  button: {
    padding: 10,
  },
});

export default AddContactPage;
