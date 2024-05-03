/**
 * Custom bottom sheet component
 *
 * @param {Function} onChange Case function upon change of sheet size (not obliged)
 * @param {Object} bottomSheetModalRef Ref to bottom sheet modal that opens it from parent component
 * @param {Array} snapPoints Array of snap points for bottom sheet
 * @param {ReactNode} children Render content inside the bottom sheet
 *
 * @returns
 */

import {
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "../../stores/themeStore";
import BackDrop from "./cards/BackDrop";

const BottomSheet = ({
  onChange,
  bottomSheetModalRef,
  snapPoints,
  children,
}) => {
  const theme = useTheme();

  function closeBottomSheet() {
    bottomSheetModalRef.current?.close();
  }

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ backgroundColor: theme.accent, width: "20%" }}
      backgroundStyle={{ backgroundColor: theme.secondary }}
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      enableDynamicSizing
      onChange={onChange}
      backdropComponent={({ style }) => (
        <BackDrop visible={true} onPress={closeBottomSheet} />
      )}>
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({});

/**
 * Parent requirements:
 *
 *   const bottomSheetModalRef = useRef(null);
 *
 *   const snapPoints = useMemo(() => ["25%", "50%"], []);
 *
 *   const handlePresentModalPress = useCallback(() => {
 *   bottomSheetModalRef.current?.present();
 *   }, []);
 *
 *   used in button ^^^
 *
 */
