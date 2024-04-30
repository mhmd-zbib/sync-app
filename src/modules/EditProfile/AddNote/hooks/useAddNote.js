import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import EditProfile from "../../services/EditProfile";
import useContactIdStore from "../../../ContactProfile/stores/ContactIdStore";
import { useNavigation } from "@react-navigation/native";

export default function useAddNote() {
  const id = useContactIdStore((state) => state.id);
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const [noteData, setNoteData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (name, value) => {
    setNoteData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddNote = useMutation({
    mutationKey: "AddNote",
    mutationFn: async () => {
      const date = new Date();
      const timestamp = date.getTime();
      const { title, description } = noteData;

      return await EditProfile.notes({ id, title, description, timestamp });
    },
    onSuccess: () => {
      console.log("done");
      queryClient.refetchQueries("ProfileNotes", id);

      navigation.navigate("ContactProfileScreen", { id: id });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    noteData,
    handleAddNote,
    handleInputChange,
  };
}
