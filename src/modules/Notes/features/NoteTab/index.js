import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import EmptyList from "../../../../shared/components/layout/EmptyList";
import Error from "../../../../shared/components/layout/Error";
import Loading from "../../../../shared/components/layout/Loading";
import FloatingAdd from "../../../../shared/components/ui/buttons/FloatingAdd";
import NoteList from "./components/NoteList";
import useGetNotes from "./hooks/useGetNotes";

const NotesTab = () => {
  const { data, isLoading, isError, error } = useGetNotes();
  const navigation = useNavigation();

  function navigateToAddNote() {
    navigation.navigate("AddNoteScreen");
  }
  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  return (
    <>
      <FloatingAdd onPress={navigateToAddNote} />
      {!data || data.length === 0 ? (
        <EmptyList title={"notes"} />
      ) : (
        <View
          style={{ flex: 1, paddingHorizontal: 10, paddingTop: 20, gap: 20 }}>
          <NoteList data={data} />
        </View>
      )}
    </>
  );
};

export default NotesTab;
