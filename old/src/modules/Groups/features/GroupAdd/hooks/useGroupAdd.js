import { useState } from "react";
import useGroupProfileStore from "../stores/useGroupProfileStore";
import { useGroupAddMutation } from "../../../queries/useGroupAddMutation";

export default function useGroupAdd() {
  const [groupName, setGroupName] = useState("");
  const [selectedContacts, setSelectedContacts] = useState([]);
  const { emoji, backgroundColor } = useGroupProfileStore();

  const { mutate: handleAddGroup } = useGroupAddMutation();

  const isDisabled =
    !groupName || selectedContacts.length === 0 || !emoji || !backgroundColor;

  const onCreate = () => {
    console.log(groupName, selectedContacts, emoji, backgroundColor);

    const date = new Date();
    const timestamp = date.getTime();
    handleAddGroup({
      groupName,
      selectedContacts,
      emoji,
      backgroundColor,
      timestamp,
    });
  };

  return {
    selectedContacts,
    setSelectedContacts,
    groupName,
    setGroupName,
    emoji,
    backgroundColor,
    onCreate,
    isDisabled,
  };
}
