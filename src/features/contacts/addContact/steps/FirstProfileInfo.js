import React, { useState } from "react";
import InputText from "../../../../components/ui/InputText";
import ReminderFrequency from "../components/ReminderFrequency";
import { useAddContactStore } from "../store/useAddContactStore";

const FirstProfileInfo = () => {
  const { formData, updateField } = useAddContactStore();

  return (
    <>
      <InputText
        label={"Full Name"}
        value={formData.name}
        onChange={(text) => updateField("name", text)}
      />
      <ReminderFrequency />
    </>
  );
};

export default FirstProfileInfo;
