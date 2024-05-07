import { useCallback, useMemo, useRef } from "react";
import { Keyboard } from "react-native";

export default function useHandleGroupSheet() {
  const groupProfileSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["90%", "90%"], []);
  const handlePresentProfileSheet = useCallback(() => {
    Keyboard.dismiss();
    groupProfileSheetRef.current?.present();
  });

  return { groupProfileSheetRef, snapPoints, handlePresentProfileSheet };
}
