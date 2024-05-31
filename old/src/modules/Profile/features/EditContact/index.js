import React, { useState } from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import Typography from "../../../../shared/components/ui/Typography";
import useProfileIdStore from "../../store/useProfileIdStore";
import { useContactMutation } from "../../queries/useContactMutation";

const EditContactScreen = ({ route }) => {
  const { id } = useProfileIdStore();
  const { mutate } = useContactMutation();

  const { phone: prevPhone, email: prevEmail } = route.params;
  const [phone, setNewPhone] = useState(prevPhone || "");
  const [email, setNewEmail] = useState(prevEmail || "");

  return (
    <InputPageLayout
      screenTitle={"Contact Details"}
      buttonTitle={"Done"}
      onPress={() => mutate({ id, phone, email })}>
      <InputText
        label={"Phone"}
        value={phone}
        onChange={setNewPhone}
        keyboardType="numeric"
      />
      <InputText
        onChange={setNewEmail}
        label={"Email"}
        value={email}
        keyboardType="email-address"
      />
    </InputPageLayout>
  );
};

export default EditContactScreen;
