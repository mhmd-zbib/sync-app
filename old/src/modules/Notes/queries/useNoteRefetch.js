import { useNavigation } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";

export default function useNoteQueryUtils() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const navigateRefetch = () => {
    navigation.goBack();
    queryClient.invalidateQueries(["NoteDetails"]);
    queryClient.invalidateQueries(["ProfileNotes"]);
  };

  return { navigateRefetch };
}
