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
  nextStep: () =>
    set((state) => ({ step: state.step < 2 ? state.step + 1 : state.step })),
  prevStep: (navigation) => {
    const { step } = get();
    if (step > 0) {
      set((state) => ({ step: state.step - 1 }));
    } else {
      navigation.goBack();
    }
  },
}));
