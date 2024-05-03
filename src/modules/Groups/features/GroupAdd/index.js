import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../../../shared/components/ui/buttons/Button";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import ProfilePicture from "../../../../shared/components/ui/cards/ProfilePicture";
import BottomSheet from "../../../../shared/components/ui/BottomSheet";
import GroupProfileBottomSheet from "./components/GroupProfileBottomSheet";
import EmojiPicker from "../../../../shared/components/ui/emoji/EmojiPicker";

const GroupAddScreen = () => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["90%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <InputPageLayout screenTitle={"Create Group"} buttonTitle={"Create"}>
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
