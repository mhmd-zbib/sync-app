// src/contexts/BottomSheetContext.js
import React, { createContext, useContext, useRef, useCallback } from "react";

const BottomSheetContext = createContext();

export function useBottomSheet() {
  return useContext(BottomSheetContext);
}

export const BottomSheetProvider = ({ children }) => {
  const bottomSheetModalRef = useRef(null);

  const handlePresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetContext.Provider value={{ handlePresentModal }}>
      {children}
    </BottomSheetContext.Provider>
  );
};
