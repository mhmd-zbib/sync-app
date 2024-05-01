import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import EmptyList from "../../../../shared/components/layout/EmptyList";
import Error from "../../../../shared/components/layout/Error";
import Loading from "../../../../shared/components/layout/Loading";
import FloatingAdd from "../../../../shared/components/ui/buttons/FloatingAdd";
import useGetNotes from "./hooks/useGetNotes";
import NoteList from "./components/NoteList";
import { View } from "react-native";
import SearchBar from "../../../../shared/components/ui/SearchBar";

const NotesTab = () => {
  const { data, isLoading, isError, error } = useGetNotes();
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  function navigateToAddNote() {
    navigation.navigate("AddNoteScreen");
  }

  return (
    <>
      <FloatingAdd onPress={navigateToAddNote} />
      {!data || data.length === 0 ? (
        <EmptyList title={"notes"} />
      ) : (
        <View
          style={{ flex: 1, paddingHorizontal: 10, paddingTop: 20, gap: 20 }}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <NoteList searchTerm={searchTerm} data={data} />
        </View>
      )}
    </>
  );
};

export default NotesTab;
