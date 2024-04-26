import React from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import useAddContact from "./hooks/useAddContact";
import useAddContactLayout from "./hooks/useAddContactLayout";
import useAddContactRenderStep from "./hooks/useAddContactRenderStep";
import useAddContactSteps from "./hooks/useAddContactSteps";
import useAddContactScreenName from "./hooks/useRenderTitle";

const AddContactScreen = () => {
  const { step, nextStep, prevStep } = useAddContactSteps();
  const { addContact } = useAddContact();
  useAddContactLayout(step, prevStep);

  return (
    <InputPageLayout
      screenTitle={useAddContactScreenName(step)}
      onPress={step < 2 ? nextStep : addContact.mutate}
      buttonTitle={"Next"}>
      {useAddContactRenderStep(step)}
    </InputPageLayout>
  );
};

export default AddContactScreen;
