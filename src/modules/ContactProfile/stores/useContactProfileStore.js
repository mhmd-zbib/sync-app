import { create } from "zustand";

const initialContactData = {
  created_at: null,
  description: null,
  email: "",
  id: null,
  name: "",
  phone_number: "",
};

const useContactProfileStore = create((set) => ({
  contactData: initialContactData,
  setContactData: (newData) =>
    set((state) => ({ contactData: { ...state.contactData, ...newData } })),
  resetContactData: () => set({ contactData: initialContactData }),
}));

export default useContactProfileStore;
