import React from "react";
import InputText from "../../../../../../shared/components/ui/InputText";
import useAddContactFormStore from "../../store/useAddContactFormStore";

const StepOne = () => {
  const { formData, updateField } = useAddContactFormStore();

  return (
    <>
      <InputText
        label={"Name"}
        value={formData.name}
        onChange={(text) => {
          updateField("name", text);
        }}
      />
    </>
  );
};

export default StepOne;
