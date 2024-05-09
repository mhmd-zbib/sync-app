import { create } from "zustand";

const useGroupIdStore = create((set) => ({
  id: null,
  setId: (id) => set({ id }),
}));

export default useGroupIdStore;
