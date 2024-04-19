import create from "zustand";

export const useContactDetailsStore = create((set) => ({
  contactDetails: {},
  setContactDetails: (details) => set({ contactDetails: details }),
}));
