import { create } from "zustand";

const useContactIdStore = create((set) => ({
  id: null,
  setId: (id) => set({ id }),
}));

export default useContactIdStore;
