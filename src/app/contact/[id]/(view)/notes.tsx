import SearchInput from "@/components/ui/SearchInput";
import { useContactNotes } from "@/features/Contact/query/get-contact-notes";
import NoteList from "@/features/Notes/Components/Note-List";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const ContactNotesScreen = () => {
  const { contactId } = useLocalSearchParams();
  const { data } = useContactNotes({ contactId });

  return (
    <NoteList
      data={data}
      scrollEnabled={false}
      ListHeaderComponent={
        <SearchInput
          onScroll={() => {
            console.log("scrolled");
          }}
        />
      }
      stickyHeaderIndices={[0]}
    />
  );
};

export default ContactNotesScreen;
