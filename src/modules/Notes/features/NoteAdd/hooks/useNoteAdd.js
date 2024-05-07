import { useState } from "react";
import useContactIdStore from "../../../../ContactProfile/stores/ContactIdStore";
import { useNoteAddMutation } from "../../../queries/useNoteAddMutation";
import { useNoteEditMutation } from "../../../queries/useNoteEditMutation";

export default function useNoteAdd(
  initialNoteData = { title: "", details: "" }
) {
  const contactId = useContactIdStore((state) => state.id);
  const [noteData, setNoteData] = useState(initialNoteData);

  const { mutate: addNote } = useNoteAddMutation();
  const { mutate: editNote } = useNoteEditMutation();

  const handleInputChange = (name, value) => {
    setNoteData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNote = () => {
    const date = new Date();
    const timestamp = date.getTime();

    noteData.timestamp = timestamp;
    noteData.connection_id = contactId;

    // updates the note if the id exists
    if (noteData.id) {
      return editNote(noteData);
    }

    // creates a new note hence the id doesn't exist
    return addNote(noteData);
  };

  return { noteData, handleNote, handleInputChange };
}
