import { useState } from "react";
import useGroupContactSelectModeStore from "../../../store/useGroupContactSelectModeStore";
import useGroupContactSelectedStore from "../../../store/useGroupContactSelectedStore";

export function useGroupContactSelect() {
  const { selectMode, setSelectMode } = useGroupContactSelectModeStore();
  const { selected, addSelected, toggleSelect } =
    useGroupContactSelectedStore();

  const handleLongPress = (id) => {
    setSelectMode(true);
    if (!selected.includes(id)) {
      addSelected(id);
    }
  };

  const handleSelect = (id) => {
    if (!selectMode) return;
    toggleSelect(id);
  };

  return { handleSelect, selected, selectMode, setSelectMode, handleLongPress };
}
