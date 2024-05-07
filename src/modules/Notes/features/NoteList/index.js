import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import EmptyList from "../../../../shared/components/layout/EmptyList";
import Error from "../../../../shared/components/layout/Error";
import Loading from "../../../../shared/components/layout/Loading";
import FloatingAdd from "../../../../shared/components/ui/buttons/FloatingAdd";
import useNoteListQuery from "../../queries/useNoteListQuery";
import NoteList from "./components/NoteList";
import useContactIdStore from "../../../ContactProfile/stores/ContactIdStore";

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
