import React from "react";
import StepThree from "../components/forms/StepThree";
import StepTwo from "../components/forms/StepTwo";
import StepOne from "../components/forms/StepOne";

export default function useAddContactRenderStep(step) {
  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    default:
      return <StepOne />;
  }
}
