import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import ProfilePicture from "../../../../shared/components/ui/cards/ProfilePicture";
import GroupProfileBottomSheet from "./GroupProfileBottomSheet";
import BottomSheet from "../../../../shared/components/ui/BottomSheet";

const GroupAddScreen = () => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["100%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <InputPageLayout
      screenTitle={"Create Group"}
      buttonTitle={"Create"}
      disabled>
      <ProfilePicture size="lg" onPress={handlePresentModalPress} />
      <InputText label={"Group Name"} />

      <BottomSheet
        snapPoints={snapPoints}
        bottomSheetModalRef={bottomSheetModalRef}>
        <GroupProfileBottomSheet />
      </BottomSheet>
    </InputPageLayout>
  );
};

export default GroupAddScreen;

const styles = StyleSheet.create({});
