import React, { useState } from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import { useProfileQuery } from "../../queries/useProfileQuery";
import Error from "../../../../shared/components/layout/Error";

const EditDescriptionScreen = ({ route }) => {
  const { description } = route.params;
  const [newDesc, setNewDesc] = useState(description);

  return (
    <InputPageLayout screenTitle={"Description"} buttonTitle={"Done"}>
      <InputText value={newDesc} onChange={setNewDesc} multiline={true} />
    </InputPageLayout>
  );
};

export default EditDescriptionScreen;
