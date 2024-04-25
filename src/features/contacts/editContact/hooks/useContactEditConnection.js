import { useNavigation } from "@react-navigation/native";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";
import { useEditConnectionMutation } from "../queries/useEditConnectionMutation";
import { useEffect, useState } from "react";

const useContactEditConnection = () => {
  const { id, phone_number, email } = useContactDetailsStore(
    (state) => state.contactDetails
  );

  const [phoneNum, setPhoneNum] = useState(phone_number || "");
  const [emailAdd, setEmailAdd] = useState(email || "");

  const { editConnection } = useEditConnectionMutation();

  const handleSubmit = () => {
    editConnection.mutate({
      contactId: id,
      phoneNumber: phoneNum,
      email: emailAdd,
    });
  };

  useEffect(() => {
    setPhoneNum(phone_number);
    setEmailAdd(email);
  }, []);

  return {
    phoneNum,
    emailAdd,
    setPhoneNum,
    setEmailAdd,
    handleSubmit,
  };
};

export default useContactEditConnection;
