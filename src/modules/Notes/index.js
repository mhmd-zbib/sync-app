import { useNavigation } from "@react-navigation/native";
import React from "react";
import EmptyList from "../../shared/components/layout/EmptyList";
import Error from "../../shared/components/layout/Error";
import Loading from "../../shared/components/layout/Loading";
import FloatingAdd from "../../shared/components/ui/buttons/FloatingAdd";
import useGetProfileNotes from "../ContactProfile/hooks/useGetProfileNotes";
import NoteList from "./components/NoteList";

const NotesTab = () => {
  const { data, isLoading, isError, error } = useGetProfileNotes();
  const navigation = useNavigation();

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  function navigateToAddNote() {
    navigation.navigate("AddNote");
  }

  return (
    <>
      <FloatingAdd onPress={navigateToAddNote} />
      {!data || data.length === 0 ? (
        <EmptyList title={"notes"} />
      ) : (
        <NoteList data={data} />
      )}
    </>
  );
};

export default NotesTab;
