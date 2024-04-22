import React, { useState } from "react";
import { StyleSheet } from "react-native";
import InputText from "../../../../../components/ui/InputText";
import PageContainer from "../../../../../components/ui/cards/PageContainer";
import { useContactDetailsStore } from "../../../../../stores/contacts/useContactDetailsStore";
import { useNavigation } from "@react-navigation/native";
import useContactDescriptionEditor from "../../../../../hooks/contacts/useContactDescriptionEditor";

const ContactEditDescription = () => {
  const { desc, setDesc, handleSubmit } = useContactDescriptionEditor();

  return (
    <PageContainer buttonTitle={"Save"} onPress={handleSubmit} st>
      <InputText
        autoFocus
        style={{ marginHorizontal: 10 }}
        value={desc}
        onChange={setDesc}
      />
    </PageContainer>
  );
};

export default ContactEditDescription;
