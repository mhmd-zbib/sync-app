import React from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";
import useAddNote from "./hooks/useNoteAdd";

const NoteAddScreen = ({ route }) => {
  const { data } = route.params || {};
  const { noteData, handleNote, handleInputChange } = useAddNote(data);

  return (
    <InputPageLayout
      disabled={!noteData.title.trim()}
      screenTitle={data ? "Edit Note" : "Add Note"}
      buttonTitle={data ? "Edit" : "Create"}
      onPress={handleNote}>
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

export default NoteAddScreen;
