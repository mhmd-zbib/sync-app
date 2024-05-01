import NoteServices from "../../../services/NoteServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";

/**
 * This hook deletes the note from the database of the contact, passing in the id of it.
 *
 * @param {number|string} id - The ID of the note to delete.
 */
export default function useDeleteNote(id) {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const deleteNote = useMutation({
    mutationKey: ["DeleteNote", id],
    mutationFn: () => NoteServices.delete(id),
    onSuccess: () => {
      console.log("Note deleted successfully");
      queryClient.invalidateQueries(["ProfileNotes"]);
      navigation.goBack();
    },
    onError: (error) => {
      console.error("Error deleting note:", error);
    },
  });

  return { deleteNote };
}
