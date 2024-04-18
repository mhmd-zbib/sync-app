import create from "zustand";

const useContactFormStore = create((set) => ({
  formData: {
    name: "",
    email: "",
    phoneNumber: "",
    links: [],
  },
  step: 0,
  addLink: (link) =>
    set((state) => ({
      formData: {
        ...state.formData,
        links: [...state.formData.links, link],
      },
    })),
  removeLink: (index) =>
    set((state) => ({
      formData: {
        ...state.formData,
        links: state.formData.links.filter((_, i) => i !== index),
      },
    })),
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  resetForm: () =>
    set({
      formData: { name: "", email: "", phoneNumber: "", links: [] },
      step: 0,
    }),
  nextStep: () =>
    set((state) => ({
      step: state.step + 1,
    })),
  previousStep: () =>
    set((state) => ({
      step: state.step > 0 ? state.step - 1 : 0,
    })),
}));

export default useContactFormStore;
