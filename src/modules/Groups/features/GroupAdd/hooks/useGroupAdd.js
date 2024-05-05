import { useState } from "react";
import useGroupProfileStore from "../stores/useGroupProfileStore";
import shortnameToUnicode from "../../../../../shared/utils/shortnameToUnicode";

export default function useGroupAdd() {
  const [groupName, setGroupName] = useState("");
  const [contacts, setContacts] = useState([0]);
  const { emoji, backgroundColor } = useGroupProfileStore();

  const isButtonDisabled = () => {
    if (groupName.trim() === "" || emoji === "" || backgroundColor === "") {
      return true;
    }
  };
  const onCreate = () => {
    console.log(groupName, shortnameToUnicode[`:${emoji}:`], backgroundColor);
  };

  return {
    groupName,
    setGroupName,
    emoji,
    backgroundColor,
    isButtonDisabled,
    onCreate,
    contacts,
  };
}
