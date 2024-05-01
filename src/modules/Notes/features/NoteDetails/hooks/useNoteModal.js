import { useState } from "react";
import useDeleteNote from "./useDeleteNote";
import { useNavigation } from "@react-navigation/native";

export default function useNoteModal({ id, data }) {
  console.log(id, data);

  const { deleteNote } = useDeleteNote(id);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const options = [
    {
      title: "Edit",
      onPress: () => {
        navigation.navigate("AddNoteScreen", { data });
        toggleModal();
      },
      color: "white",
    },
    {
      title: "Delete",
      onPress: () => {
        deleteNote.mutate();
        toggleModal();
      },
      color: "red",
    },
  ];

  const toggleModal = () => {
    console.log("modal before", modalVisible);
    setModalVisible(!modalVisible);
    console.log("modal after", modalVisible);
  };

  return { modalVisible, setModalVisible, options, toggleModal };
}
