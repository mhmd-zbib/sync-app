import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useNoteDeleteMutation } from "../../../queries/useNoteDeleteMutation";

export default function useNoteModal({ id, data }) {
  console.log(id, data);

  const { mutate: deleteNote } = useNoteDeleteMutation();
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
        deleteNote(id);
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

  return { modalVisible, options, toggleModal };
}
