import { useState } from "react";
import useGroupProfileStore from "../stores/useGroupProfileStore";
import { useGroupAddMutation } from "../../../queries/useGroupAddMutation";

export default function useGroupAdd() {
  const [groupName, setGroupName] = useState("");
  const { emoji, backgroundColor } = useGroupProfileStore();
  const [selectedContacts, setSelectedContacts] = useState([]);

  const { mutate: handleAddGroup } = useGroupAddMutation();

  const onCreate = () => {
    const date = new Date();
    const timestamp = date.getTime();

    handleAddGroup({
      groupName,
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
    handleAddGroup,
  };
}
