import { create } from "zustand";

const useProfileIdStore = create((set) => ({
  id: null,
  setId: (newId) => set({ id: newId }),
}));

export default useProfileIdStore;
