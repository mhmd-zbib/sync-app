import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";
import { useEditDescriptionMutation } from "../queries/useEditDescriptionMutation";

const useContactEditDescription = () => {
  const { id, description } = useContactDetailsStore(
    (state) => state.contactDetails
  );

  const [desc, setDesc] = useState(description || "");
  const { editDescription } = useEditDescriptionMutation();
  const navigation = useNavigation();

  useEffect(() => {
    setDesc(description);
  }, []);

  const handleSubmit = () => {
    console.log(desc);
    editDescription.mutate({ contactId: id, description: desc });
    navigation.goBack();
  };

  return {
    desc,
    setDesc,
    handleSubmit,
  };
};

export default useContactEditDescription;
