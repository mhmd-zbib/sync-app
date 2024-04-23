import create from "zustand";

export const useAddContactStore = create((set, get) => ({
  step: 0,
  formData: {
    name: "",
    reminderFrequency: "",
    phoneNumber: null,
    email: "",
    socialMediaLink: [],
  },
  setStep: (step) => set({ step }),
  setFormData: (name, value) =>
    set((state) => ({
      formData: { ...state.formData, [name]: value },
    })),
  nextStep: () => {
    const { step, formData } = get();
    if (step === 2) {
      console.log("Final step data:", formData);
    }
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
}));
