import create from "zustand";

interface UserState {
  id: number | null;
  setId: (id: number) => void;
}

// Define your store
const useProfileIdStore = create<UserState>((set) => ({
  id: null,
  setId: (id) => set({ id }),
}));

export default useProfileIdStore;
