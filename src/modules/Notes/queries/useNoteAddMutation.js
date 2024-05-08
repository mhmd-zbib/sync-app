import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import NoteServices from "../services/NoteServices";

/**
 * Note adding mutation
 * @param {Object} noteData - Note data to be added
 *
 */

export function useNoteAddMutation() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation({
    mutationKey: "AddNote",
    mutationFn: async (noteData) => {
      return await NoteServices.add(noteData);
    },
    onSuccess: () => {
      // refetch the notes and navigates back
      navigation.goBack();
      queryClient.invalidateQueries(["NoteDetails"]);
      queryClient.invalidateQueries(["ProfileNotes"]);
    },
    onError: (error) => {
      console.error("Error creating note:", error);
    },
  });
}
