import create from "zustand";
import ContactsService from "../../services/ContactService";

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
    // ContactsService.createContact(formData);
    const data = ContactsService.getAllContacts();

    console.log(data, "this is what we got");
  },
  resetForm: () =>
    set({
      formData: { name: "", email: "", phoneNumber: "", tags: [] },
    }),
}));

export default useContactFormStore;
