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
  resetForm: () =>
    set({
      formData: { name: "", email: "", phoneNumber: "", tags: [] },
    }),
}));

export default useContactFormStore;
