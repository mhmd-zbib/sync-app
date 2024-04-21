import { create } from "zustand";

export const useTagsSelectStore = create((set) => ({
  selectedTags: [],

  addTag: (tag) =>
    set((state) => ({ selectedTags: [...state.selectedTags, tag] })),
  removeTag: (tag) =>
    set((state) => ({
      selectedTags: state.tag.filter((_, i) => i !== index),
    })),
}));
