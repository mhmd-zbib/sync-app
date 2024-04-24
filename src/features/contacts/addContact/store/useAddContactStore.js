import create from "zustand";
import useAddContact from "../hooks/useAddContact";

export const useAddContactStore = create((set, get) => ({
  step: 0,
  formData: {
    name: "",
    reminderFrequency: "",
    phoneNumber: null,
    email: "",
    socialMediaLink: [],
  },

  setFormData: (name, value) =>
    set((state) => ({
      formData: { ...state.formData, [name]: value },
    })),
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  setStep: (step) => set({ step }),
  nextStep: () => {
    const { step, formData } = get();
    set({ step: step < 2 ? step + 1 : step });
  },
  prevStep: (navigation) => {
    const { step } = get();
    if (step > 0) {
      set((state) => ({ step: state.step - 1 }));
    } else {
      navigation.goBack();
    }
  },
  resetForm: () =>
    set({
      formData: {
        name: "",
        reminderFrequency: "",
        phoneNumber: null,
        email: "",
        socialMediaLink: [],
      },
      step: 0,
    }),
}));
