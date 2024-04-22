import React from "react";
import InputText from "../../../../components/ui/InputText";
import PageContainer from "../../../../components/ui/layout/InputPageLayout";
import useContactDescriptionEditor from "../../../../hooks/contacts/useContactDescriptionEditor";

const ContactEditDescription = () => {
  const { desc, setDesc, handleSubmit } = useContactDescriptionEditor();

  return (
    <PageContainer buttonTitle={"Save"} onPress={handleSubmit} st>
      <InputText
        label={"Description"}
        autoFocus
        style={{ marginHorizontal: 10 }}
        value={desc}
        onChange={setDesc}
        multiline
      />
    </PageContainer>
  );
};

export default ContactEditDescription;
