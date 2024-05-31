// store/useSelectedStore.js
import create from "zustand";

const useGroupContactSelectedStore = create((set) => ({
  selected: [],
  addSelected: (id) => set((state) => ({ selected: [...state.selected, id] })),
  removeSelected: (id) =>
    set((state) => ({
      selected: state.selected.filter((item) => item !== id),
    })),
  toggleSelect: (id) =>
    set((state) => {
      const isSelected = state.selected.includes(id);
      return isSelected
        ? { selected: state.selected.filter((item) => item !== id) }
        : { selected: [...state.selected, id] };
    }),
}));

export default useGroupContactSelectedStore;
