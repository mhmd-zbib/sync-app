import create from "zustand";

const useToggleAddBottomSheet = create((set) => ({
  isModalVisible: false,
  showModal: () => set({ isModalVisible: true }),
  hideModal: () => set({ isModalVisible: false }),
}));

export default useToggleAddBottomSheet;
