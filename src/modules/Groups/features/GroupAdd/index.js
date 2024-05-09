import React from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import BottomSheet from "../../../../shared/components/ui/BottomSheet";
import InputText from "../../../../shared/components/ui/InputText";
import CardButton from "../../../../shared/components/ui/buttons/CardButton";
import ProfilePicture from "../../../../shared/components/ui/cards/ProfilePicture";
import GroupProfileBottomSheet from "./components/GroupProfileBottomSheet";
import useGroupAdd from "./hooks/useGroupAdd";
import useHandleGroupSheet from "./hooks/useHandleGroupSheet";
import useHandleGroupConnections from "./hooks/useHandleGroupConnections";

const GroupAddScreen = () => {
  const { snapPoints, groupProfileSheetRef, handlePresentProfileSheet } =
    useHandleGroupSheet();

  const {
    selectedContacts,
    setSelectedContacts,
    emoji,
    backgroundColor,
    groupName,
    setGroupName,
    isDisabled,

    onCreate,
  } = useGroupAdd();

  const { navigateToSelectConnections } = useHandleGroupConnections(
    selectedContacts,
    setSelectedContacts
  );

  return (
    <InputPageLayout
      buttonTitle={"Create"}
      screenTitle={"Create Group"}
      onPress={onCreate}
      disabled={isDisabled}>
      <ProfilePicture
        size="lg"
        onPress={handlePresentProfileSheet}
        emoji={emoji}
        color={backgroundColor}
      />
      <InputText label="Group Name" value={groupName} onChange={setGroupName} />
      <CardButton
        title="Connections"
        onPress={navigateToSelectConnections}
        value={selectedContacts.length}
      />
      <BottomSheet
        bottomSheetModalRef={groupProfileSheetRef}
        snapPoints={snapPoints}>
        <GroupProfileBottomSheet />
      </BottomSheet>
    </InputPageLayout>
  );
};

export default GroupAddScreen;
