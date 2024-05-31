import { create } from "zustand";

const useGroupContactSelectModeStore = create((set) => ({
  selectMode: false,
  setSelectMode: (mode) => set({ selectMode: mode }),
}));

export default useGroupContactSelectModeStore;
