import create from "zustand";

const useContactFormStore = create((set) => ({
  formData: {
    name: "",
    email: "",
    phoneNumber: "",
    tags: [],
  },
  step: 0,
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  resetForm: () =>
    set({
      formData: { name: "", email: "", phoneNumber: "", tags: [] },
      step: 0,
    }),
  nextStep: () =>
    set((state) => ({
      step: state.step + 1,
    })),

  // Function to decrement the step
  previousStep: () =>
    set((state) => ({
      step: state.step > 0 ? state.step - 1 : 0,
    })),
}));

export default useContactFormStore;
