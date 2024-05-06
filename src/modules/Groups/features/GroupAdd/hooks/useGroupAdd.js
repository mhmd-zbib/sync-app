import { useState } from "react";
import useGroupProfileStore from "../stores/useGroupProfileStore";
import shortnameToUnicode from "../../../../../shared/utils/shortnameToUnicode";

export default function useGroupAdd() {
  const [groupName, setGroupName] = useState("");
  const [contacts, setContacts] = useState([0]);
  const { emoji, backgroundColor } = useGroupProfileStore();
  const [selectedContacts, setSelectedContacts] = useState([]);

  const onCreate = () => {
    console.log(
      groupName,
      shortnameToUnicode[`:${emoji}:`],
      backgroundColor,
      selectedContacts.length
    );
  };

  return {
    selectedContacts,
    setSelectedContacts,
    groupName,
    setGroupName,
    emoji,
    backgroundColor,
    onCreate,
    contacts,
  };
}
