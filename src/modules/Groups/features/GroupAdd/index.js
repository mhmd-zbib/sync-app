import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import BottomSheet from "../../../../shared/components/ui/BottomSheet";
import CardButton from "../../../../shared/components/ui/buttons/CardButton";
import ContactsBottomSheet from "./components/ContactsBottomSheet";
import GroupAddForm from "./components/GroupAddForm";
import GroupProfileBottomSheet from "./components/GroupProfileBottomSheet";
import useGroupAdd from "./hooks/useGroupAdd";

const GroupAddScreen = ({ route }) => {
  const groupProfileSheetRef = useRef(null);
  const contactsSheetRef = useRef(null);
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["90%", "90%"], []);
  const handlePresentProfileSheet = useCallback(() => {
    groupProfileSheetRef.current?.present();
  }, []);

  const {
    setGroupName,
    groupName,
    emoji,
    backgroundColor,
    onCreate,
    setSelectedContacts,
    selectedContacts,
  } = useGroupAdd();

  const navigateToSelect = () => {
    navigation.navigate("ContactSelectListScreen", {
      selectedContacts,
      onGoBack: (data) => {
        setSelectedContacts(data);
      },
    });
  };

  return (
    <InputPageLayout
      onPress={onCreate}
      screenTitle={"Create Group"}
      buttonTitle={"Create"}
      disabled={
        groupName.trim() === "" ||
        emoji === "" ||
        backgroundColor === "" ||
        selectedContacts.length === 0
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
        onPress={navigateToSelect}
        value={selectedContacts.length}
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
