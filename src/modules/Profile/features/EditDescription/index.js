import React, { useState } from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import { useProfileQuery } from "../../queries/useProfileQuery";

const EditDescriptionScreen = () => {
  const { data } = useProfileQuery();
  const [newDesc, setNewDesc] = useState(data.description);

  return (
    <InputPageLayout screenTitle={"Edit Description"} buttonTitle={"Edit"}>
      <InputText value={newDesc} onChange={setNewDesc} multiline={true} />
    </InputPageLayout>
  );
};

export default EditDescriptionScreen;
