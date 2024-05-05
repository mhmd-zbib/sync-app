import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import BottomSheet from "../../../../shared/components/ui/BottomSheet";
import GroupAddForm from "./components/GroupAddForm";
import GroupProfileBottomSheet from "./components/GroupProfileBottomSheet";
import ContactsBottomSheet from "./components/ContactsBottomSheet";
import useGroupAdd from "./hooks/useGroupAdd";
import ItemCard from "../../../../shared/components/ui/cards/ItemCard";
import Typography from "../../../../shared/components/ui/Typography";
import CardButton from "../../../../shared/components/ui/buttons/CardButton";

const GroupAddScreen = () => {
  const groupProfileSheetRef = useRef(null);
  const contactsSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["90%", "90%"], []);

  const handlePresentProfileSheet = useCallback(() => {
    groupProfileSheetRef.current?.present();
  }, []);

  const handlePresetContactsSheet = useCallback(() => {
    contactsSheetRef.current?.present();
  }, []);

  const { setGroupName, groupName, emoji, backgroundColor, onCreate } =
    useGroupAdd();

  return (
    <InputPageLayout
      onPress={onCreate}
      screenTitle={"Create Group"}
      buttonTitle={"Create"}
      disabled={
        groupName.trim() === "" || emoji === "" || backgroundColor === ""
      }>
      <GroupAddForm
        groupName={groupName}
        setGroupName={setGroupName}
        backgroundColor={backgroundColor}
        emoji={emoji}
        handlePresentProfileSheet={handlePresentProfileSheet}
      />

      <CardButton
        title={"Add Connections"}
        onPress={handlePresetContactsSheet}
      />

      <BottomSheet
        enableDynamicSizing={false}
        snapPoints={snapPoints}
        bottomSheetModalRef={groupProfileSheetRef}>
        <GroupProfileBottomSheet />
      </BottomSheet>

      <BottomSheet
        enableDynamicSizing={false}
        snapPoints={snapPoints}
        bottomSheetModalRef={contactsSheetRef}>
        <ContactsBottomSheet />
      </BottomSheet>
    </InputPageLayout>
  );
};

export default GroupAddScreen;

const styles = StyleSheet.create({});
