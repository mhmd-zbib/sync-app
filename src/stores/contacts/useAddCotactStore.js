import create from "zustand";

const useContactFormStore = create((set) => ({
  formData: {
    name: "",
    email: "",
    phoneNumber: "",
    tags: [],
  },
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  submitForm: async () => {
    const { formData } = useContactFormStore.getState();
    console.log("Submitting contact", formData);
  },
  resetForm: () =>
    set({
      formData: { name: "", email: "", phoneNumber: "", tags: [] },
    }),
}));

export default useContactFormStore;
