import React from "react";
import { StyleSheet } from "react-native";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import useAddNote from "./hooks/useAddNote";

const AddNoteScreen = () => {
  const { noteData, handleAddNote, handleInputChange } = useAddNote();

  return (
    <InputPageLayout
      disabled={!noteData.title.trim()}
      screenTitle={"Add Note"}
      buttonTitle={"Create"}
      onPress={() => handleAddNote.mutate()}>
      <InputText
        label={"Note Title"}
        value={noteData.title}
        onChange={(text) => handleInputChange("title", text)}
      />
      <InputText
        label={"Note Description"}
        multiline
        value={noteData.description}
        onChange={(text) => handleInputChange("description", text)}
      />
    </InputPageLayout>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({});
