import { create } from "zustand";

const useAddContactFormStore = create((set) => ({
  formData: {
    name: "",
    email: "",
    phoneNumber: "",
    links: [],
  },
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  resetForm: () => set({ formData: { name: "", email: "", phoneNumber: "" } }),
}));

export default useAddContactFormStore;
