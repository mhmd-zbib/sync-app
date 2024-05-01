import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import NoteServices from "../../../services/NoteServices";
import useContactIdStore from "../../../../ContactProfile/stores/ContactIdStore";
import { useNavigation } from "@react-navigation/native";

export default function useAddNote(
  initialNoteData = { title: "", details: "" }
) {
  console.log(initialNoteData, "inital");
  const navigation = useNavigation();
  const contactId = useContactIdStore((state) => state.id);
  const [noteData, setNoteData] = useState(initialNoteData);

  const queryClient = useQueryClient();
  const handleInputChange = (name, value) => {
    setNoteData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNote = useMutation({
    mutationKey: "AddOrUpdateNote",
    mutationFn: async () => {
      const date = new Date();
      const timestamp = date.getTime();
      const { id, title, details } = noteData;
      if (id) {
        return await NoteServices.edit({ id, title, details, timestamp });
      } else {
        return await NoteServices.add({ contactId, title, details, timestamp });
      }
    },
    onSuccess: () => {
      navigation.goBack();
      queryClient.invalidateQueries(["NoteDetails"]);
      queryClient.invalidateQueries(["ProfileNotes"]);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { noteData, handleNote, handleInputChange };
}
