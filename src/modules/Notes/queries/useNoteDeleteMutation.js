import NoteServices from "../services/NoteServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";

/**
 * This hook deletes the note from the database of the contact, passing in the id of it.
 * @param {number|string} id - The ID of the note to delete.
 */

export function useNoteDeleteMutation() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["DeleteNote"],
    mutationFn: (id) => {
      NoteServices.delete(id);
    },
    onSuccess: () => {
      navigation.goBack();
      queryClient.invalidateQueries(["NoteDetails"]);
      queryClient.invalidateQueries(["ProfileNotes"]);
    },
    onError: (error) => {
      console.error("Error deleting note:", error);
    },
  });
}
