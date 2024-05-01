import React from "react";
import { StyleSheet } from "react-native";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import useAddNote from "./hooks/useAddNote";

const AddNoteScreen = ({ route }) => {
  const { data } = route.params || {};
  const { noteData, handleNote, handleInputChange } = useAddNote(data);

  return (
    <InputPageLayout
      disabled={!noteData.title.trim()}
      screenTitle={data ? "Edit Note" : "Add Note"}
      buttonTitle={data ? "Edit" : "Create"}
      onPress={() => handleNote.mutate()}>
      <InputText
        label={"Note Title"}
        value={noteData.title}
        onChange={(text) => handleInputChange("title", text)}
      />
      <InputText
        label={"Note Description"}
        multiline
        value={noteData.details}
        onChange={(text) => handleInputChange("details", text)}
      />
    </InputPageLayout>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({});
