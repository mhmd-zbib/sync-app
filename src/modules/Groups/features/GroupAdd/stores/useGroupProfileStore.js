// useGroupStore.js
import create from "zustand";

const useGroupProfileStore = create((set) => ({
  emoji: "",
  backgroundColor: "",

  setEmoji: (emoji) => set({ emoji }),
  setBackgroundColor: (color) => set({ backgroundColor: color }),
}));

export default useGroupProfileStore;
