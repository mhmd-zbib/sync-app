import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import NoteServices from "../services/NoteServices";

/**
 *Responsible for updating the note, interacts directly with database
 *
 * @param {Object} noteData - The data of the note to be updated
 */

export function useNoteEditMutation() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation({
    mutationKey: "EditNote",

    mutationFn: async (noteData) => {
      return await NoteServices.edit(noteData);
    },
    onSuccess: () => {
      // refetch the notes and go back
      navigation.goBack();
      queryClient.invalidateQueries(["NoteDetails"]);
      queryClient.invalidateQueries(["ProfileNotes"]);
    },
    onError: (error) => {
      console.error("Error creating group:", error);
    },
  });
}
