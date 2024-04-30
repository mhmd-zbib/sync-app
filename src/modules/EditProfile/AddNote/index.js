import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputPageLayout from "../../../shared/components/layout/InputPageLayout";
import InputText from "../../../shared/components/ui/InputText";
import useAddNote from "./hooks/useAddNote";

const AddNote = () => {
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

export default AddNote;

const styles = StyleSheet.create({});
