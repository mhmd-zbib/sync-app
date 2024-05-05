import React from "react";
import InputText from "../../../../../shared/components/ui/InputText";
import ProfilePicture from "../../../../../shared/components/ui/cards/ProfilePicture";

const GroupAddForm = ({
  groupName,
  setGroupName,
  backgroundColor,
  emoji,
  handlePresentProfileSheet,
}) => (
  <>
    <ProfilePicture
      color={backgroundColor}
      emoji={emoji}
      size="lg"
      onPress={handlePresentProfileSheet}
    />
    <InputText label={"Group Name"} value={groupName} onChange={setGroupName} />
  </>
);

export default GroupAddForm;
