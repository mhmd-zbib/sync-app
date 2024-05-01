import React, { useState } from "react";
import { StyleSheet } from "react-native";
import DetailPage from "../../../../shared/components/layout/DetailPage";
import OptionsModal from "../../../../shared/components/ui/OptionsModal";
import Typography from "../../../../shared/components/ui/Typography";
import useDeleteNote from "./hooks/useDeleteNote";
import { useNavigation } from "@react-navigation/native";

const NoteDetailsScreen = ({ route }) => {
  const { item } = route.params;
  const { deleteNote } = useDeleteNote(item.id);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const options = [
    {
      title: "Edit",
      onPress: () => {
        navigation.navigate("EditNoteScreen", { item });
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
    console.log("toggleModal");
    setModalVisible(!modalVisible);
  };

  return (
    <DetailPage
      onOptionPress={toggleModal}
      screenTitle="Note Details"
      style={{ paddingHorizontal: 20, gap: 20 }}>
      <Typography variant="xlg" fontWeight="500">
        {item.title}
      </Typography>
      <Typography>{item.details}</Typography>
      <OptionsModal
        options={options}
        toggleModal={toggleModal}
        modalVisible={modalVisible}
      />
    </DetailPage>
  );
};

export default NoteDetailsScreen;

const styles = StyleSheet.create({});
