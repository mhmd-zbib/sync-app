import { useState } from "react";
export const useAddContactSteps = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    reminderFrequency: "",
    phoneNumber: null,
    email: "",
    socialMediaLink: [],
  });

  const nextStep = () => {
    if (step < 2) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    console.log(step);
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return { step, formData, handleChange, nextStep, prevStep };
};
