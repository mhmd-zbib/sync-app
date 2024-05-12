import React, { useState } from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import { useProfileQuery } from "../../queries/useProfileQuery";
import Error from "../../../../shared/components/layout/Error";
import { useDescriptionMutation } from "../../queries/useDescriptionMutation";
import useProfileIdStore from "../../store/useProfileIdStore";

const EditDescriptionScreen = ({ route }) => {
  const { id } = useProfileIdStore();
  const { description: oldDescription } = route.params;
  const [description, setDescription] = useState(oldDescription);
  const { mutate } = useDescriptionMutation();

  return (
    <InputPageLayout
      disabled={!description}
      screenTitle={"Description"}
      buttonTitle={"Done"}
      onPress={() => mutate({ id, description })}>
      <InputText
        value={description}
        onChange={setDescription}
        multiline={true}
      />
    </InputPageLayout>
  );
};

export default EditDescriptionScreen;
