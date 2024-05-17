import { useNavigation } from "@react-navigation/native";
import React from "react";
import FloatingAdd from "../../../../shared/components/ui/buttons/FloatingAdd";
import NoteList from "./components/NoteList";
import { View } from "react-native";

const NoteListScreen = () => {
  const navigation = useNavigation();

  function navigateToAddNote() {
    navigation.navigate("AddNoteScreen");
  }

  return (
    <>
      <FloatingAdd onPress={navigateToAddNote} />
      <NoteList />
    </>
  );
};

export default NoteListScreen;
