import InputScreenLayout from "@/components/layouts/FormLayout";
import TextInput from "@/components/ui/TextInput";
import { useContact } from "@/modules/Contact/query/get-contact";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";

const EditDescriptionScreen = () => {
  const { id } = useLocalSearchParams();
  const { data } = useContact({ contactId: id });

  const [description, setDescription] = useState(data?.description);

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  const handlePress = () => {
    console.log(description);
  };

  return (
    <InputScreenLayout onPress={handlePress}>
      <TextInput
        label="Description"
        multiline
        value={description}
        onChangeText={handleDescriptionChange}
      />
    </InputScreenLayout>
  );
};

export default EditDescriptionScreen;
