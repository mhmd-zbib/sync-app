import React, { useState } from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import Typography from "../../../../shared/components/ui/Typography";

const EditContactScreen = ({ route }) => {
  const { phone, email } = route.params;

  const [newPhone, setNewPhone] = useState(phone);
  const [newEmail, setNewEmail] = useState(email);

  return (
    <InputPageLayout screenTitle={"Contact Details"} buttonTitle={"Done"}>
      <InputText
        label={"Phone"}
        value={newPhone}
        onChange={setNewPhone}
        keyboardType="numeric"
      />
      <InputText
        onChange={setNewEmail}
        label={"Email"}
        value={newEmail}
        keyboardType="email-address"
      />
    </InputPageLayout>
  );
};

export default EditContactScreen;
